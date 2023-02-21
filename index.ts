import { Telegram } from "./src/telegram/telegram";

const telegram = new Telegram("1397194440:AAGaP70TMT5cdZAfh19-pyDtHNNCR8XxkAA");

async function test() {
    console.log(await telegram.callApi("getMe", "get", {}));
    console.log(await telegram.callApi("sendMessage", "post", { chat_id: 856570258, text: "message" }));
    const updates = await telegram.getUpdates(0, 100, 10_000, {
        message: true,
        edited_message: true,
        // "channel_post",
        // "edited_channel_post",
        // "inline_query",
        // "chosen_inline_result",
        // "callback_query",
        // "shipping_query",
        // "pre_checkout_query",
        // "poll",
        // "poll_answer",
        // "my_chat_member",
        // "chat_member",
        chat_join_request: true,
    });
    console.log(updates);
}

test().then();
