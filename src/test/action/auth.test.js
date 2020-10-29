import {login, logout} from "../../action/auth";

test("should return login action object", () => {
  const uid = "123tggg"
  const action = login(uid);
  expect(action).toEqual({
    type: "LOGIN",
    uid
  })
});

test("should return logout action object", () => {
  const uid = "123tggg"
  const action = logout();
  expect(action).toEqual({
    type: "LOGOUT",
  })
});