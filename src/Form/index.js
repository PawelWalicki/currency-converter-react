import "./style.css";

const Form = () => (
    <form className="form">
    <fieldset className="form__fieldset">
        <legend className="form__legend">Przelicz waluty:</legend>
        <p>
            <label className="form__text">Kwota do wymiany PLN:
                <input className="form__input" type="number" step="0.1" required />
            </label>
        </p>
        <p>
            <label className="form__text">Wybierz walute:
                <select className="form__currency" name="currency">
                    <option value="4.7">Euro (EUR)</option>
                    <option value="4.6">Dolar amerykański (USD)</option>
                </select>
            </label>
        </p>
        <p>
            Wartość: <span className="nie wiem"></span>
        </p>

    </fieldset>
</form>
);

export default Form;