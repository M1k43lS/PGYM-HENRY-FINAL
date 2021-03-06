import "./style.css"
import style from "./checkout.module.css";
import { useDispatch, useSelector } from "react-redux";
import CartItem from "../CartItem/CartItem";
import { validateUserIsLogged } from "../../store/actions/actions-login";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { BASE_URL, POST_MERCADOPAGO, LOCAL_HOST } from "../../store/constantes";
import { clearCart } from "../../store/actions/actionsCart";
import { removeFromCart } from "../../store/actions/actionsCart";
import { Link } from "react-router-dom";
import swal from "sweetalert";

/** Reducer para limpiar carrito
/* import { clearCart } from "../../store/reducer/reducerCart.js"; */

//Rutas para hacer el post a Mercado Pago
/* import { POST_MERCADOPAGO, USER_LOAD } from "../../constantes"; */

export default function Checkout(activity) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.login);
  const orderLineId = useSelector((state) => state.cart.newOrederLineId);
  const orderLine = useSelector((state)=>state.cart.orderLine)
  const [emailClass, setEmailClass] = useState("email-hiden");
  const [emailCheckout, setEmailCheckout] = useState("");
  const [timerToMP , setTimerToMP] = useState("timer-hiden");
  const userEmail = useSelector((state) => state.login.user.email);

  useEffect(() => {
    dispatch(validateUserIsLogged());
    setEmailCheckout(userEmail);
  }, [dispatch]);
  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate]);

  const state = useSelector((state) => state);

  const { cart } = state.cart;
  const cartCheckOut = useSelector((state) => state.cart.order);
  const totalCart = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const products = { orderBody: cartCheckOut };
  /*   console.log(cartCheckOut);
    console.log(products);
    console.log(products[0]);
 */

  const usuarioName = state.login.user.displayName;
  

  // Validacion de usuario
  /* const userState = useSelector(state => state.user[0]) */
  async function checkOut(products) {
    console.log("checkout");
    //Busco ID de usuario de firebase
    let id = user.uid;

    if (id) {
      //Envio la data para conseguir ID de carrito
      /* let pushProduct = await axios.post(USER_LOAD + id + '/cart', products); */

      /* let idCart = pushProduct.data[0]; */

      let idCart = Math.random(0, 1000000);

      /* await axios.get(USER_LOAD + idCart.id + '/cart'); */
      /* let check = {state:'Processing', totalPrice: totalCart}
            await axios.put('/orders/checkout/' + idCart.id, check); */

      const nameMP = usuarioName.split(" ");
      const name = nameMP[0];
      const lastname = nameMP[1];

      //!  ACTIVAR ENVIO DE EMAIL
      /* let check = {state:'Processing', totalPrice: totalCart}
            await axios.post(BASE_URL + '/order/', check); */
      //userID
      
       let email = {
                user: {
                    name: name,
                    lastName: lastname,
                    email: emailCheckout    
                },
                info: {
                    orderId: idCart,
                    totalPrice: totalCart
                }
            }
            let resEmail = await axios.post(BASE_URL +'/email/orderCreated', email)
      //! --------------------------------------------------------

      //name
      //price
      //count

      let mercadoPagoRes = await axios.post( BASE_URL + "/mercadopago", cartCheckOut );
      /*   console.log(mercadoPagoRes); */
      /* window.open(mercadoPagoRes.data) */
      window.location.href = mercadoPagoRes.data;
      dispatch(clearCart());
    } else {
      alert("algo salio mal!");
    }
  }

  async function cancelar(orderLineId) {
    console.log(orderLineId);
    await axios.put(`${BASE_URL}/order/canceled/${orderLineId.newOrderId}`);
    const clearPaso2 = {
      orderId: orderLineId.newOrderId,
    };
    await axios.put(
      `${BASE_URL}/diahora/addStock`,
      clearPaso2
    );
    //console.log(response2);
    const usuario = await axios.get(`${BASE_URL}/user/${user.uid}`);
    console.log(usuario.data)
    await orderLine.forEach((e) => {
      axios.delete(`${BASE_URL}/review/delete/${usuario.data.id}/${e.activityId}`);
    })
    //const { data } = await axios.delete(`${BASE_URL}/order/cart/${data2.data.id}`);
    dispatch(clearCart());
  }

  const alertCancelar = () => {
    swal({
      title: "??Est?? seguro que desea cancelar?",
      text: "Una vez cancelado no se podr?? recuperar",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        navigate("/", {replace: true});
        cancelar(orderLineId);
        swal("Su pedido ha sido cancelado", {
          icon: "success",
        });
      } else {
        swal("Su pedido no ha sido cancelado");
      }
    });
  }

  function handleEmailClick (){
    if(emailClass === 'email-hiden')setEmailClass('email-show');
    if (emailClass === 'email-show'){
      setEmailClass('email-hiden');
      let emailValue = document.getElementById("Email").value;
      setEmailCheckout(emailValue);
    }

    /* if(emailValue !== ''){
      setEmailCheckout(emailValue);
    } */
    console.log(emailCheckout);
  }

function handleButtonPay (){

  checkOut(products, totalCart);
  setTimerToMP('timer-show');

}
 

  //Hacer verificacion isAuthenticated y en caso de ser afirmativo retornar:
  return (
    <div className={style.container}>
      <div className={style.checkOut}>
        <div className={style.title}>Checkout</div>
        <div className={style.products}>
          {cart?.map((item, index) => (
            <CartItem
              key={index}
              data={item}
            />
          ))}
        </div>
        <div className={style.total}>
          <h4>
            Total: $
            {cart.reduce(
              (total, item) => total + item.price * item.quantity,
              0
            )}
          </h4>
        </div>
        <div className={style.address}>
          <p>Email: {emailCheckout}</p>
          <button onClick={handleEmailClick}>Editar Email</button>
        <input className={emailClass} type="text" id="Email" />
        </div>
        <div className={style.dispatchContainer}>
          <button onClick={(e) => alertCancelar()}>cancelar</button>
          <button onClick={handleButtonPay}>Pagar</button>
          <p>
            (al presionar el boton sera redireccionado a la pagina de Mercado
            Pago para finalizar la compra)
          </p>
        </div>
        <div className={style.crossHide}></div>
        <div className={style.crossHide2}></div>
        <div className={style.crossHide3}></div>

         <div className={timerToMP}><span id="countdown">Seras Redireccionado a Mercado Pago en segundos</span></div>
      </div>
    </div>
  );
}

