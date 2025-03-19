import { useState } from "react";
import "./styles.css";

export default function App() {
  // form 초기값 정의
  const initialState = {
    Username: "",
    FullName: "",
    age: "",
  };

  const [form, setForm] = useState(initialState);
  const [display, setDisplay] = useState(false);

  // 입력한 정보를 표시하는 함수
  const hadleDisplay = (e) => {
    e.preventDefault();
    setDisplay(true);
  };

  // form 값을 업데이트하는 함수
  const updateForm = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  return (
    <form onSubmit={hadleDisplay}>
      <div>
        <label>
          Username :
          <input
            autoFocus // 자동 포커싱
            value={form.Username}
            name="Username"
            onChange={updateForm}
          />
        </label>
      </div>
      <div>
        <label>
          FullName :
          <input value={form.FullName} name="FullName" onChange={updateForm} />
        </label>
      </div>
      <div>
        <label>
          age :
          <input
            type="number" // 숫자 필드로 정의
            value={form.age}
            name="age"
            onChange={updateForm}
          />
        </label>
        <div>
          <button>submit</button>
        </div>
      </div>
      {display && (
        <div>
          <p>UserInfo</p>
          <li>Username : {form.Username}</li>
          <li>FullName : {form.FullName}</li>
          <li>age : {form.age}</li>
        </div>
      )}
    </form>
  );
}

// HTML에서 <button> 태그가 <form> 태그 안에 있을 경우
// type 속성을 따로 명시하지 않으면 기본값이 type="submit"으로 설정
// 즉, button을 클릭하면 onSubmit 이벤트가 호출되는 것이 기본 동작
