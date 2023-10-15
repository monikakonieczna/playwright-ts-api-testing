import { expect, test } from "playwright/test";

test("Get Booking", async ({ request, baseURL }) => {
    const _response = await request.post(`${baseURL}/booking`, {
        data: {
            "firstname": "Sally",
            "lastname": "Brown",
            "totalprice": 111,
            "depositpaid": true,
            "bookingdates": {
                "checkin": "2013-02-23",
                "checkout": "2014-10-23"
            },
            "additionalneeds": "Breakfast"
        }
    });
    expect(_response.status()).toBe(200);
    expect(_response.ok()).toBeTruthy();
})
