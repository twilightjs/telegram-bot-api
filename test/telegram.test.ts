import assert from "assert";
import { describe, it } from "node:test";
import { Telegram } from "../src/telegram/telegram";

describe("api methods ", async () => {
    const telegram = new Telegram("1397194440:AAGaP70TMT5cdZAfh19-pyDtHNNCR8XxkAA");
    it("should return a promise object call api", async () => {
        console.log(await (await telegram.callApi("getMe", "get", {}))?.json());
        console.log(JSON.stringify(await (await telegram.callApi("sendMessage", "post", { chat_id: 856570258, text: "message" }))?.json()));

        // assert.ok((<{ ok: true | false }>await telegram.callApi("getMe", "get", {})).ok);
        // assert.ok((<{ ok: true | false }>await telegram.callApi("sendMessage", "post", { chat_id: 856570258, text: "message" })).ok);
        // assert.strictEqual(
        //     await telegram.callApi("getMe", "get", {}),
        //     {
        //         ok: true,
        //         result: {
        //             id: 1397194440,
        //             is_bot: true,
        //             first_name: "BotSun",
        //             username: "SeRzZzJBot",
        //             can_join_groups: true,
        //             can_read_all_group_messages: false,
        //             supports_inline_queries: false,
        //         },
        //     }
        // );
    });

    // it("should return a promise Update-object", async () => {

    // });
});
