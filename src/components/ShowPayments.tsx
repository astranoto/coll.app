import payments from "../payments.json";
function ShowPayment() {
  const a = localStorage.getItem("searchedAccount");
  const info: User = a ? JSON.parse(a) : null;
  function goBack() {
    window.history.back();
  }
  function paymentShower() {
    const userPayments = payments.filter((payment) => {
      if (payment.id == info.id) {
        return payment;
      }
    });
    if (userPayments.length > 0) {
      let n = 0;
      return userPayments.map((userPayment) => {
        n++;
        return (
          <div
            key={n}
            className="border-4 border-black rounded-lg p-10 text-2xl m-6"
          >
            <li>
              <b>Pagamento n.{n}</b>
            </li>
            <br></br>
            <b>Inizio: </b> <br></br>
            {userPayment.start}
            <br></br>
            <b>Fine: </b> <br></br>
            {userPayment.end}
            <br></br>
            <b>Pagamento: </b> <br></br>€{userPayment.amount} (
            {(userPayment.amount / userPayment.nMonths).toFixed(2)} €/mese)
          </div>
        );
      });
    }
  }
  return (
    <>
      <div className="grid-cols-2">
        <button onClick={goBack} className="col-span-1 justify-self-start m-5">
          <img src="/foto/icona-back-nero.png" className="h-10 w-10 m-10"></img>
        </button>
        <h1 className="font-bold text-center text-7xl">
          Pagamenti di {info.name}
        </h1>
      </div>
      <div className="bg-[#f5f5f5] grid gap-4 lg:grid-cols-2 xl:grid-cols-4 my-8 mx-8 rounded-lg lg:h-full lg:col-span-1 lg:my-12 lg:mx-36">
        {paymentShower()}
      </div>
    </>
  );
}
export default ShowPayment;
