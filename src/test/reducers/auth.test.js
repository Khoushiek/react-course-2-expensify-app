import authReducers from "../../reducers/auth";

test("should return the state with uid for login", () => {
	const uid = "33rtg";
	const action = {
		type: 'LOGIN',
		uid
	};
	const state = authReducers({}, action);
	expect(state).toEqual({uid})
});

test("should return the state for logout", () => {
	const action = {
		type: 'LOGOUT',
	};
	const state = authReducers({uid: "anything"}, action);
	expect(state).toEqual({});
});