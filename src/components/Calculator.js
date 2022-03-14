import { useState } from "react";
// import "./styles.css";

export default function Calculator() {
    const [state, setState] = useState({
        purchasePrice: 450000,
        downPayment: 135000,
        repaymentTime: 25,
        interestRate: 3
    });

    const updateState = (key, value) =>
        setState((prevState) => ({ ...prevState, [key]: Number(value) }));

    const handleChange = (e) => updateState(e.target.name, e.target.value);

    const calculateMortgagePayment = () => {
        const { purchasePrice, downPayment, interestRate, repaymentTime } = state;

        const p = purchasePrice - downPayment;
        const n = repaymentTime;

        const r = interestRate / 100;

        const payment = Math.round(
            (p * (r * Math.pow(r + 1, n))) / (Math.pow(r + 1, n) - 1)
        );

        if (isNaN(payment)) return null;

        return Math.round(payment / 12);
    };

    return (
        <div className="m-5 p-3 border-2 border-violet-300 rounded">
            <h1 className="text-3xl">Mortgage Calculator</h1>
            <div className="grid md:grid-cols-3 my-5 gap-10">
                <div className="input-section">
                    <label>
                        <span className="input-type">Purchase price</span>
                        <span className="input-value text-xl ml-2 font-semibold">
                            ${state.purchasePrice}
                        </span>
                    </label>
                    <input
                        name="purchasePrice"
                        className="block w-full bg-blue my-3"
                        min={100000}
                        max={1000000}
                        step={50000}
                        defaultValue={state.purchasePrice}
                        value={state.purchasePrice}
                        onChange={handleChange}
                        type="range"
                    />
                </div>
                <div className="input-section">
                    <label>
                        <span className="input-type">Down payment</span>
                        <span className="input-value text-xl ml-2 font-semibold">
                            ${state.downPayment}
                        </span>
                    </label>
                    <input
                        name="downPayment"
                        className="block w-full bg-blue my-3"
                        min={100000}
                        max={1000000}
                        step={5000}
                        defaultValue={state.downPayment}
                        value={state.downPayment}
                        onChange={handleChange}
                        type="range"
                    />
                </div>
                <div className="input-section">
                    <label>
                        <span className="input-type">Repayment time</span>
                        <span className="input-value text-xl ml-2 font-semibold">
                            {state.repaymentTime} years
                        </span>
                    </label>
                    <input
                        name="repaymentTime"
                        className="block w-full bg-blue my-3"
                        min={10}
                        max={60}
                        step={1}
                        defaultValue={state.repaymentTime}
                        value={state.repaymentTime}
                        onChange={handleChange}
                        type="range"
                    />
                </div>
                <div className="input-section">
                    <label>
                        <span className="input-type">Interest rate</span>
                        <span className="input-value text-xl ml-2 font-semibold">
                            {state.interestRate} %
                        </span>
                    </label>
                    <input
                        name="interestRate"
                        className="block w-full bg-blue my-3"
                        min={2}
                        max={20}
                        step={0.1}
                        defaultValue={state.interestRate}
                        value={state.interestRate}
                        onChange={handleChange}
                        type="range"
                    />
                </div>

                <div>
                    <h3>Loan Amount</h3>
                    <p className="text-3xl font-semibold">
                        ${state.purchasePrice - state.downPayment}
                    </p>
                </div>

                <div>
                    <h3>Estimated pr. month</h3>
                    <p className="text-3xl font-semibold">{calculateMortgagePayment()}</p>
                </div>
            </div>
        </div>
    );
}