"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const http_status_codes_1 = __importDefault(require("http-status-codes"));
const _server_1 = __importDefault(require("@server"));
const UserDao_mock_1 = __importDefault(require("@daos/User/UserDao.mock"));
const User_1 = __importDefault(require("@entities/User"));
const functions_1 = require("@shared/functions");
const constants_1 = require("@shared/constants");
describe('Users Routes', () => {
    const usersPath = '/api/users';
    const getUsersPath = `${usersPath}/all`;
    const addUsersPath = `${usersPath}/add`;
    const updateUserPath = `${usersPath}/update`;
    const deleteUserPath = `${usersPath}/delete/:id`;
    const { BAD_REQUEST, CREATED, OK } = http_status_codes_1.default;
    let agent;
    beforeAll((done) => {
        agent = supertest_1.default.agent(_server_1.default);
        done();
    });
    describe(`"GET:${getUsersPath}"`, () => {
        it(`should return a JSON object with all the users and a status code of "${OK}" if the
            request was successful.`, (done) => {
            // Setup spy
            const users = [
                new User_1.default('Sean Maxwell', 'sean.maxwell@gmail.com'),
                new User_1.default('John Smith', 'john.smith@gmail.com'),
                new User_1.default('Gordan Freeman', 'gordan.freeman@gmail.com'),
            ];
            spyOn(UserDao_mock_1.default.prototype, 'getAll').and.returnValue(Promise.resolve(users));
            // Call API
            agent.get(getUsersPath)
                .end((err, res) => {
                functions_1.pErr(err);
                expect(res.status).toBe(OK);
                // Caste instance-objects to 'User' objects
                const respUsers = res.body.users;
                const retUsers = respUsers.map((user) => {
                    return new User_1.default(user);
                });
                expect(retUsers).toEqual(users);
                expect(res.body.error).toBeUndefined();
                done();
            });
        });
        it(`should return a JSON object containing an error message and a status code of
            "${BAD_REQUEST}" if the request was unsuccessful.`, (done) => {
            // Setup spy
            const errMsg = 'Could not fetch users.';
            spyOn(UserDao_mock_1.default.prototype, 'getAll').and.throwError(errMsg);
            // Call API
            agent.get(getUsersPath)
                .end((err, res) => {
                functions_1.pErr(err);
                expect(res.status).toBe(BAD_REQUEST);
                expect(res.body.error).toBe(errMsg);
                done();
            });
        });
    });
    describe(`"POST:${addUsersPath}"`, () => {
        const callApi = (reqBody) => {
            return agent.post(addUsersPath).type('form').send(reqBody);
        };
        const userData = {
            user: new User_1.default('Gordan Freeman', 'gordan.freeman@gmail.com'),
        };
        it(`should return a status code of "${CREATED}" if the request was successful.`, (done) => {
            // Setup Spy
            spyOn(UserDao_mock_1.default.prototype, 'add').and.returnValue(Promise.resolve());
            // Call API
            agent.post(addUsersPath).type('form').send(userData)
                .end((err, res) => {
                functions_1.pErr(err);
                expect(res.status).toBe(CREATED);
                expect(res.body.error).toBeUndefined();
                done();
            });
        });
        it(`should return a JSON object with an error message of "${constants_1.paramMissingError}" and a status
            code of "${BAD_REQUEST}" if the user param was missing.`, (done) => {
            // Call API
            callApi({})
                .end((err, res) => {
                functions_1.pErr(err);
                expect(res.status).toBe(BAD_REQUEST);
                expect(res.body.error).toBe(constants_1.paramMissingError);
                done();
            });
        });
        it(`should return a JSON object with an error message and a status code of "${BAD_REQUEST}"
            if the request was unsuccessful.`, (done) => {
            // Setup spy
            const errMsg = 'Could not add user.';
            spyOn(UserDao_mock_1.default.prototype, 'add').and.throwError(errMsg);
            // Call API
            callApi(userData)
                .end((err, res) => {
                functions_1.pErr(err);
                expect(res.status).toBe(BAD_REQUEST);
                expect(res.body.error).toBe(errMsg);
                done();
            });
        });
    });
    describe(`"PUT:${updateUserPath}"`, () => {
        const callApi = (reqBody) => {
            return agent.put(updateUserPath).type('form').send(reqBody);
        };
        const userData = {
            user: new User_1.default('Gordan Freeman', 'gordan.freeman@gmail.com'),
        };
        it(`should return a status code of "${OK}" if the request was successful.`, (done) => {
            // Setup spy
            spyOn(UserDao_mock_1.default.prototype, 'update').and.returnValue(Promise.resolve());
            // Call Api
            callApi(userData)
                .end((err, res) => {
                functions_1.pErr(err);
                expect(res.status).toBe(OK);
                expect(res.body.error).toBeUndefined();
                done();
            });
        });
        it(`should return a JSON object with an error message of "${constants_1.paramMissingError}" and a
            status code of "${BAD_REQUEST}" if the user param was missing.`, (done) => {
            // Call api
            callApi({})
                .end((err, res) => {
                functions_1.pErr(err);
                expect(res.status).toBe(BAD_REQUEST);
                expect(res.body.error).toBe(constants_1.paramMissingError);
                done();
            });
        });
        it(`should return a JSON object with an error message and a status code of "${BAD_REQUEST}"
            if the request was unsuccessful.`, (done) => {
            // Setup spy
            const updateErrMsg = 'Could not update user.';
            spyOn(UserDao_mock_1.default.prototype, 'update').and.throwError(updateErrMsg);
            // Call API
            callApi(userData)
                .end((err, res) => {
                functions_1.pErr(err);
                expect(res.status).toBe(BAD_REQUEST);
                expect(res.body.error).toBe(updateErrMsg);
                done();
            });
        });
    });
    describe(`"DELETE:${deleteUserPath}"`, () => {
        const callApi = (id) => {
            return agent.delete(deleteUserPath.replace(':id', id.toString()));
        };
        it(`should return a status code of "${OK}" if the request was successful.`, (done) => {
            // Setup spy
            spyOn(UserDao_mock_1.default.prototype, 'delete').and.returnValue(Promise.resolve());
            // Call api
            callApi(5)
                .end((err, res) => {
                functions_1.pErr(err);
                expect(res.status).toBe(OK);
                expect(res.body.error).toBeUndefined();
                done();
            });
        });
        it(`should return a JSON object with an error message and a status code of "${BAD_REQUEST}"
            if the request was unsuccessful.`, (done) => {
            // Setup spy
            const deleteErrMsg = 'Could not delete user.';
            spyOn(UserDao_mock_1.default.prototype, 'delete').and.throwError(deleteErrMsg);
            // Call Api
            callApi(1)
                .end((err, res) => {
                functions_1.pErr(err);
                expect(res.status).toBe(BAD_REQUEST);
                expect(res.body.error).toBe(deleteErrMsg);
                done();
            });
        });
    });
});
