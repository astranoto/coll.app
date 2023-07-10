import payments from "../payments.json";

function Payments() {
  interface Payment {
    id: number;
    start: string;
    end: string;
    nMonths: number;
    amount: number;
  }

  const a = localStorage.getItem("searchedAccount");
  const searchedUser: User = a ? JSON.parse(a) : null;
  function goBack() {
    window.history.back();
  }
  async function writePayments() {
    const newHandle = await window.showSaveFilePicker();
    const writableStream = await newHandle.createWritable();
    const start = document.getElementById("start") as HTMLInputElement;
    const end = document.getElementById("end") as HTMLInputElement;
    const money = document.getElementById("money") as HTMLInputElement;
    if (start.value && end.value && money) {
      const startDate = new Date(start.value);
      const endDate = new Date(end.value);
      const newPayment: Payment = {
        id: searchedUser.id,
        start: start.value,
        end: end.value,
        nMonths: calculateMonths(startDate, endDate),
        amount: Number(money.value),
      };
      payments.push(newPayment);
      await writableStream.write(new Blob([JSON.stringify(payments)]));
      await writableStream.close();
    } else {
    }
  }
  function calculateMonths(startDate: Date, endDate: Date) {
    const startYear = startDate.getFullYear();
    const startMonth = startDate.getMonth();
    const startDay = startDate.getDate();

    const endYear = endDate.getFullYear();
    const endMonth = endDate.getMonth();
    const endDay = endDate.getDate();

    const months = (endYear - startYear) * 12 + (endMonth - startMonth);
    if (startDay <= endDay) {
      return months;
    } else {
      return months - 1;
    }
  }
  function savePayment() {
    writePayments();
  }
  return (
    <div className=" h-screen w-screen">
      <button onClick={goBack} className="col-span-1 justify-self-start m-5">
        <img src="/foto/icona-back-nero.png" className="h-10 w-10 m-10"></img>
      </button>
      <p className="font-semibold m-8 text-xl text-center lg:text-6xl">
        <b>Pagamenti</b>
        <br />
        Qui potrai pagare i tuoi fidati collaboratori
      </p>
      <div className="lg:grid lg:grid-cols-2 my-8 h-3/5">
        <div className="bg-[#f5f5f5] my-8 mx-8 rounded-lg lg:h-full lg:col-span-1 lg:my-10 lg:hover:my-5">
          <p className="text-center text-5xl my-24">
            <b>Pagamenti per periodi</b>
          </p>
          <div className="grid grid-cols-2 place-items-center">
            <div className="grid grid-rows-2 my-8 text-2xl font-semibold">
              <p className="text-center font-bold">Data di inizio</p>
              <input
                id="start"
                className="rounded-lg p-5"
                defaultValue=""
                type="date"
              ></input>
            </div>
            <div className="grid grid-rows-2 my-8 text-2xl font-semibold">
              <p className="text-center font-bold">Data di fine</p>
              <input
                id="end"
                className="rounded-lg p-5"
                defaultValue=""
                type="date"
              ></input>
            </div>
            <div className="col-span-2 grid grid-rows-2 my-8 text-2xl font-semibold">
              <p className="text-center font-bold">Pagamento</p>
              <input
                id="money"
                className="rounded-lg p-5"
                type="number"
              ></input>
            </div>
          </div>
          <button
            onClick={savePayment}
            className="text-white bg-black text-4xl font-bold rounded-lg my-24 mx-48 p-5"
          >
            Salva pagamento
          </button>
        </div>
        <div className="bg-[#f5f5f5] my-8 lg:mx-16 mx-8 grid grid-row-3 rounded-lg  lg:h-full lg:col-span-1 lg:my-10 lg:hover:my-5"></div>
      </div>
    </div>
  );
}
export default Payments;
