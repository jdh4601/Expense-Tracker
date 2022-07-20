function ChangeMoney(props) {
  return (
    <div>
      <label for="action">Option : </label>
      <select className="change-btn" name="action" id="action">
        <option id="1" value="Dollar">
          {props.monetary}
        </option>
        <option id="2" vaule="Won">
          {props.monetary}
        </option>
        <option id="3" value="Euro">
          {props.monetary}
        </option>
      </select>
    </div>
  );
}

export default ChangeMoney;
