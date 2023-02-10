export type Update = {
    update_id?: number;
    message?: Message;
    edited_message?: Message;
    channel_post?: Message;
    edited_channel_post?: Message;
    inline_query?: InlineQuery;
    chosen_inline_result?: ChosenInlineResult;
    callback_query?: CallbackQuery;
    shipping_query?: ShippingQuery;
    pre_checkout_query?: PreCheckoutQuery;
    poll?: Poll;
    poll_answer?: PollAnswer;
    my_chat_member?: ChatMemberUpdated;
    chat_member?: ChatMemberUpdated;
    chat_join_request?: ChatJoinRequest;
};
export type User = {
    id?: string | number;
    is_bot?: boolean;
    first_name?: string;
    last_name?: string;
    username?: string;
    language_code?: string;
    is_premium?: boolean;
    added_to_attachment_menu?: boolean;
    can_join_groups?: boolean;
    can_read_all_group_messages?: boolean;
    supports_inline_queries?: boolean;
};
export type Chat = {
    id?: string | number;
    type?: "private" | "group" | "supergroup" | "channel";
    title?: string;
    username?: string;
    first_name?: string;
    last_name?: string;
    is_forum?: boolean;
    photo?: ChatPhoto;
    active_usernames?: string[];
    emoji_status_custom_emoji_id?: string;
    bio?: string;
    has_private_forwards?: boolean;
    has_restricted_voice_and_video_messages?: boolean;
    join_to_send_messages?: boolean;
    join_by_request?: boolean;
    description?: string;
    invite_link?: string;
    pinned_message?: Message;
    permissions?: ChatPermissions;
    slow_mode_delay?: number;
    message_auto_delete_time?: number;
    has_aggressive_anti_spam_enabled?: boolean;
    has_hidden_members?: boolean;
    has_protected_content?: boolean;
    sticker_set_name?: string;
    can_set_sticker_set?: boolean;
    linked_chat_id?: number;
    location?: ChatLocation;
};
export type Message = {
    message_id?: string | number;
    message_thread_id?: string | number;
    from?: User;
    sender_chat?: Chat;
    date?: number;
    chat?: Chat;
    forward_from?: User;
    forward_from_chat?: Chat;
    forward_from_message_id?: number;
    forward_signature?: string;
    forward_sender_name?: string;
    forward_date?: number;
    is_topic_message?: boolean;
    is_automatic_forward?: boolean;
    reply_to_message?: Message;
    via_bot?: User;
    edit_date?: number;
    has_protected_content?: boolean;
    media_group_id?: string;
    author_signature?: string;
    text?: string;
    entities?: MessageEntity[];
    animation?: Animation;
    audio?: Audio;
    document?: Document;
    photo?: PhotoSize[];
    sticker?: Sticker;
    video?: Video;
    video_note?: VideoNote;
    voice?: Voice;
    caption?: string;
    caption_entities?: MessageEntity[];
    has_media_spoiler?: boolean;
    contact?: Contact;
    dice?: Dice;
    game?: Game;
    poll?: Poll;
    venue?: Venue;
    location?: Location;
    new_chat_members?: User[];
    left_chat_member?: User;
    new_chat_title?: string;
    new_chat_photo?: PhotoSize[];
    delete_chat_photo?: boolean;
    group_chat_created?: boolean;
    supergroup_chat_created?: boolean;
    channel_chat_created?: boolean;
    message_auto_delete_timer_changed?: MessageAutoDeleteTimerChanged;
    migrate_to_chat_id?: number;
    migrate_from_chat_id?: number;
    pinned_message?: Message;
    invoice?: Invoice;
    successful_payment?: SuccessfulPayment;
    user_shared?: UserShared;
    chat_shared?: ChatShared;
    connected_website?: string;
    write_access_allowed?: WriteAccessAllowed;
    passport_data?: PassportData;
    proximity_alert_triggered?: ProximityAlertTriggered;
    forum_topic_created?: ForumTopicCreated;
    forum_topic_edited?: ForumTopicEdited;
    forum_topic_closed?: ForumTopicClosed;
    forum_topic_reopened?: ForumTopicReopened;
    general_forum_topic_hidden?: GeneralForumTopicHidden;
    general_forum_topic_unhidden?: GeneralForumTopicUnhidden;
    video_chat_scheduled?: VideoChatScheduled;
    video_chat_started?: VideoChatStarted;
    video_chat_ended?: VideoChatEnded;
    video_chat_participants_invited?: VideoChatParticipantsInvited;
    web_app_data?: WebAppData;
    reply_markup?: InlineKeyboardMarkup;
};
export type MessageId = {
    message_id?: string | number;
};
export type MessageEntity = {
    type?:
        | "mention"
        | "hashtag"
        | "cashtag"
        | "bot_command"
        | "url"
        | "email"
        | "phone_number"
        | "bold"
        | "italic"
        | "underline"
        | "strikethrough"
        | "spoiler"
        | "code"
        | "pre"
        | "text_link"
        | "text_mention"
        | "custom_emoji";
    offset?: number;
    length?: number;
    url?: string;
    user?: User;
    language?: string;
    custom_emoji_id?: string;
};
export type PhotoSize = {
    file_id?: string;
    file_unique_id?: string;
    width?: number;
    height?: number;
    file_size?: number;
};
export type Animation = {
    file_id?: string;
    file_unique_id?: string;
    width?: number;
    height?: number;
    duration?: number;
    thumb?: PhotoSize;
    file_name?: string;
    mime_type?: string;
    file_size?: number;
};
export type Audio = {
    file_id?: string;
    file_unique_id?: string;
    duration?: number;
    performer?: string;
    title?: string;
    file_name?: string;
    mime_type?: string;
    file_size?: number;
    thumb?: PhotoSize;
};
export type Document = {
    file_id?: string;
    file_unique_id?: string;
    thumb?: PhotoSize;
    file_name?: string;
    mime_type?: string;
    file_size?: number;
};
export type Video = {
    file_id?: string;
    file_unique_id?: string;
    width?: number;
    height?: number;
    duration?: number;
    thumb?: PhotoSize;
    file_name?: string;
    mime_type?: string;
    file_size?: number;
};
export type VideoNote = {
    file_id?: string;
    file_unique_id?: string;
    length?: number;
    duration?: number;
    thumb?: PhotoSize;
    file_size?: number;
};
export type Voice = {
    file_id?: string;
    file_unique_id?: string;
    duration?: number;
    mime_type?: string;
    file_size?: number;
};
export type Contact = {
    phone_number?: string;
    first_name?: string;
    last_name?: string;
    user_id?: number;
    vcard?: string;
};
export type Dice = {
    emoji?: string;
    value?: number;
};
export type PollOption = {
    text?: string;
    voter_count?: number;
};
export type PollAnswer = {
    poll_id?: string;
    user?: User;
    option_ids?: number[];
};
export type Poll = {
    id?: string;
    question?: string;
    options?: PollOption[];
    total_voter_count?: number;
    is_closed?: boolean;
    is_anonymous?: boolean;
    type?: "regular" | "quiz";
    allows_multiple_answers?: boolean;
    correct_option_id?: number;
    explanation?: string;
    explanation_entities?: MessageEntity[];
    open_period?: number;
    close_date?: number;
};
export type Location = {
    longitude?: number;
    latitude?: number;
    horizontal_accuracy?: number;
    live_period?: number;
    heading?: number;
    proximity_alert_radius?: number;
};
export type Venue = {
    location?: Location;
    title?: string;
    address?: string;
    foursquare_id?: string;
    foursquare_type?: string;
    google_place_id?: string;
    google_place_type?: string;
};
export type WebAppData = {
    data?: string;
    button_text?: string;
};
export type ProximityAlertTriggered = {
    traveler?: User;
    watcher?: User;
    distance?: number;
};
export type MessageAutoDeleteTimerChanged = {
    message_auto_delete_time?: number;
};
export type ForumTopicCreated = {
    name?: string;
    icon_color?: number;
    icon_custom_emoji_id?: string;
};
export type ForumTopicClosed = {};
export type ForumTopicEdited = {
    name?: string;
    icon_custom_emoji_id?: string;
};
export type ForumTopicReopened = {};
export type GeneralForumTopicHidden = {};
export type GeneralForumTopicUnhidden = {};
export type UserShared = {
    request_id?: number;
    user_id?: number;
};
export type ChatShared = {
    request_id?: number;
    chat_id?: number;
};
export type WriteAccessAllowed = {};
export type VideoChatScheduled = {
    start_date?: number;
};
export type VideoChatStarted = {};
export type VideoChatEnded = {
    duration?: number;
};
export type VideoChatParticipantsInvited = {
    users?: User[];
};
export type UserProfilePhotos = {
    total_count?: number;
    photos?: PhotoSize[][];
};
export type File = {
    file_id?: string;
    file_unique_id?: string;
    file_size?: number;
    file_path?: string;
};
export type WebAppInfo = {
    url?: string;
};
export type ReplyKeyboardMarkup = {
    keyboard?: KeyboardButton[][];
    is_persistent?: boolean;
    resize_keyboard?: boolean;
    one_time_keyboard?: boolean;
    input_field_placeholder?: string;
    selective?: boolean;
};
export type KeyboardButton = {
    text?: string;
    request_user?: KeyboardButtonRequestUser;
    request_chat?: KeyboardButtonRequestChat;
    request_contact?: boolean;
    request_location?: boolean;
    request_poll?: KeyboardButtonPollType;
    web_app?: WebAppInfo;
};
export type KeyboardButtonRequestUser = {
    request_id?: number;
    user_is_bot?: boolean;
    user_is_premium?: boolean;
};
export type KeyboardButtonRequestChat = {
    request_id?: number;
    chat_is_channel?: boolean;
    chat_is_forum?: boolean;
    chat_has_username?: boolean;
    chat_is_created?: boolean;
    user_administrator_rights?: ChatAdministratorRights;
    bot_administrator_rights?: ChatAdministratorRights;
    bot_is_member?: boolean;
};
export type KeyboardButtonPollType = {
    type?: "regular" | "quiz";
};
export type ReplyKeyboardRemove = {
    remove_keyboard?: boolean;
    selective?: boolean;
};
export type InlineKeyboardMarkup = {
    inline_keyboard?: InlineKeyboardButton[][];
};
export type InlineKeyboardButton = {
    text?: string;
    url?: string;
    callback_data?: string;
    web_app?: WebAppInfo;
    login_url?: LoginUrl;
    switch_inline_query?: string;
    pay?: boolean;
};
export type LoginUrl = {
    url?: string;
    forward_text?: string;
    bot_username?: string;
    request_write_access?: boolean;
};
export type CallbackQuery = {
    id?: string;
    from?: User;
    message?: Message;
    inline_message_id?: string;
    chat_instance?: string;
    data?: string;
    game_short_name?: string;
};
export type ForceReply = {
    force_reply?: boolean;
    input_field_placeholder?: string;
    selective?: boolean;
};
export type ChatPhoto = {
    small_file_id?: string;
    small_file_unique_id?: string;
    big_file_id?: string;
    big_file_unique_id?: string;
};
export type ChatInviteLink = {
    invite_link?: string;
    creator?: User;
    creates_join_request?: boolean;
    is_primary?: boolean;
    is_revoked?: boolean;
    name?: string;
    expire_date?: number;
    member_limit?: number;
    pending_join_request_count?: number;
};
export type ChatAdministratorRights = {
    is_anonymous?: boolean;
    can_manage_chat?: boolean;
    can_delete_messages?: boolean;
    can_manage_video_chats?: boolean;
    can_restrict_members?: boolean;
    can_promote_members?: boolean;
    can_change_info?: boolean;
    can_invite_users?: boolean;
    can_post_messages?: boolean;
    can_edit_messages?: boolean;
    can_pin_messages?: boolean;
    can_manage_topics?: boolean;
};
export type ChatMember = {};
export type ChatMemberOwner = {
    status?: string;
    user?: User;
    is_anonymous?: boolean;
    custom_title?: string;
};
export type ChatMemberAdministrator = {
    status?: string;
    user?: User;
    can_be_edited?: boolean;
    is_anonymous?: boolean;
    can_manage_chat?: boolean;
    can_delete_messages?: boolean;
    can_manage_video_chats?: boolean;
    can_restrict_members?: boolean;
    can_promote_members?: boolean;
    can_change_info?: boolean;
    can_invite_users?: boolean;
    can_post_messages?: boolean;
    can_edit_messages?: boolean;
    can_pin_messages?: boolean;
    can_manage_topics?: boolean;
    custom_title?: string;
};
export type ChatMemberMember = {
    status?: string;
    user?: User;
};
export type ChatMemberRestricted = {
    status?: string;
    user?: User;
    is_member?: boolean;
    can_send_messages?: boolean;
    can_send_audios?: boolean;
    can_send_documents?: boolean;
    can_send_photos?: boolean;
    can_send_videos?: boolean;
    can_send_video_notes?: boolean;
    can_send_voice_notes?: boolean;
    can_send_polls?: boolean;
    can_send_other_messages?: boolean;
    can_add_web_page_previews?: boolean;
    can_change_info?: boolean;
    can_invite_users?: boolean;
    can_pin_messages?: boolean;
    can_manage_topics?: boolean;
    until_date?: number;
};
export type ChatMemberLeft = {
    status?: string;
    user?: User;
};
export type ChatMemberBanned = {
    status?: string;
    user?: User;
    until_date?: number;
};
export type ChatMemberUpdated = {
    chat?: Chat;
    from?: User;
    date?: number;
    old_chat_member?: ChatMember;
    new_chat_member?: ChatMember;
    invite_link?: ChatInviteLink;
};
export type ChatJoinRequest = {
    chat?: Chat;
    from?: User;
    user_chat_id?: number;
    date?: number;
    bio?: string;
    invite_link?: ChatInviteLink;
};
export type ChatPermissions = {
    can_send_messages?: boolean;
    can_send_audios?: boolean;
    can_send_documents?: boolean;
    can_send_photos?: boolean;
    can_send_videos?: boolean;
    can_send_video_notes?: boolean;
    can_send_voice_notes?: boolean;
    can_send_polls?: boolean;
    can_send_other_messages?: boolean;
    can_add_web_page_previews?: boolean;
    can_change_info?: boolean;
    can_invite_users?: boolean;
    can_pin_messages?: boolean;
    can_manage_topics?: boolean;
};
export type ChatLocation = {
    location?: Location;
    address?: string;
};
export type ForumTopic = {
    message_thread_id?: number;
    name?: string;
    icon_color?: number;
    icon_custom_emoji_id?: string;
};
export type BotCommand = {
    command?: string;
    description?: string;
};
export type BotCommandScope = {};
export type BotCommandScopeDefault = {
    type?: string;
};
export type BotCommandScopeAllPrivateChats = {
    type?: string;
};
export type BotCommandScopeAllGroupChats = {
    type?: string;
};
export type BotCommandScopeAllChatAdministrators = {
    type?: string;
};
export type BotCommandScopeChat = {
    type?: string;
    chat_id?: string | number;
};
export type BotCommandScopeChatAdministrators = {
    type?: string;
    chat_id?: string | number;
};
export type BotCommandScopeChatMember = {
    type?: string;
    chat_id?: string | number;
    user_id?: number;
};
export type MenuButton = {};
export type MenuButtonCommands = {
    type?: string;
};
export type MenuButtonWebApp = {
    type?: string;
    text?: string;
    web_app?: WebAppInfo;
};
export type MenuButtonDefault = {
    type?: string;
};
export type ResponseParameters = {
    migrate_to_chat_id?: number;
    retry_after?: number;
};
export type InputMedia = {};
export type InputMediaPhoto = {
    type?: string;
    media?: string;
    caption?: string;
    parse_mode?: string;
    caption_entities?: MessageEntity[];
    has_spoiler?: boolean;
};
export type InputMediaVideo = {
    type?: string;
    media?: string;
    thumb?: InputFile | string;
    caption?: string;
    parse_mode?: string;
    caption_entities?: MessageEntity[];
    width?: number;
    height?: number;
    duration?: number;
    supports_streaming?: boolean;
    has_spoiler?: boolean;
};
export type InputMediaAnimation = {
    type?: string;
    media?: string;
    thumb?: InputFile | string;
    caption?: string;
    parse_mode?: string;
    caption_entities?: MessageEntity[];
    width?: number;
    height?: number;
    duration?: number;
    has_spoiler?: boolean;
};
export type InputMediaAudio = {
    type?: string;
    media?: string;
    thumb?: InputFile | string;
    caption?: string;
    parse_mode?: string;
    caption_entities?: MessageEntity[];
    duration?: number;
    performer?: string;
    title?: string;
};
export type InputMediaDocument = {
    type?: string;
    media?: string;
    thumb?: InputFile | string;
    caption?: string;
    parse_mode?: string;
    caption_entities?: MessageEntity[];
    disable_content_type_detection?: boolean;
};
export type InputFile = {};
export type Sticker = {
    file_id?: string;
    file_unique_id?: string;
    type?: string;
    width?: number;
    height?: number;
    is_animated?: boolean;
    is_video?: boolean;
    thumb?: PhotoSize;
    emoji?: string;
    set_name?: string;
    premium_animation?: File;
    mask_position?: MaskPosition;
    custom_emoji_id?: string;
    file_size?: number;
};
export type StickerSet = {
    name?: string;
    title?: string;
    sticker_type?: string;
    is_animated?: boolean;
    is_video?: boolean;
    stickers?: Sticker[];
    thumb?: PhotoSize;
};
export type MaskPosition = {
    point?: string;
    x_shift?: number;
    y_shift?: number;
    scale?: number;
};
export type InlineQuery = {
    id?: string;
    from?: User;
    query?: string;
    offset?: string;
    chat_type?: string;
    location?: Location;
};
export type InlineQueryResultCachedAudio = {
    type?: string;
    id?: string;
    audio_file_id?: string;
    caption?: string;
    parse_mode?: string;
    caption_entities?: MessageEntity[];
    reply_markup?: InlineKeyboardMarkup;
    input_message_content?: InputMessageContent;
};
export type InlineQueryResultCachedDocument = {
    type?: string;
    id?: string;
    title?: string;
    document_file_id?: string;
    description?: string;
    caption?: string;
    parse_mode?: string;
    caption_entities?: MessageEntity[];
    reply_markup?: InlineKeyboardMarkup;
    input_message_content?: InputMessageContent;
};
export type InlineQueryResultCachedGif = {
    type?: string;
    id?: string;
    gif_file_id?: string;
    title?: string;
    caption?: string;
    parse_mode?: string;
    caption_entities?: MessageEntity[];
    reply_markup?: InlineKeyboardMarkup;
    input_message_content?: InputMessageContent;
};
export type InlineQueryResultCachedMpeg4Gif = {
    type?: string;
    id?: string;
    mpeg4_file_id?: string;
    title?: string;
    caption?: string;
    parse_mode?: string;
    caption_entities?: MessageEntity[];
    reply_markup?: InlineKeyboardMarkup;
    input_message_content?: InputMessageContent;
};
export type InlineQueryResultCachedPhoto = {
    type?: string;
    id?: string;
    photo_file_id?: string;
    title?: string;
    description?: string;
    caption?: string;
    parse_mode?: string;
    caption_entities?: MessageEntity[];
    reply_markup?: InlineKeyboardMarkup;
    input_message_content?: InputMessageContent;
};
export type InlineQueryResultCachedSticker = {
    type?: string;
    id?: string;
    sticker_file_id?: string;
    reply_markup?: InlineKeyboardMarkup;
    input_message_content?: InputMessageContent;
};
export type InlineQueryResultCachedVideo = {
    type?: string;
    id?: string;
    video_file_id?: string;
    title?: string;
    description?: string;
    caption?: string;
    parse_mode?: string;
    caption_entities?: MessageEntity[];
    reply_markup?: InlineKeyboardMarkup;
    input_message_content?: InputMessageContent;
};
export type InlineQueryResultCachedVoice = {
    type?: string;
    id?: string;
    voice_file_id?: string;
    title?: string;
    caption?: string;
    parse_mode?: string;
    caption_entities?: MessageEntity[];
    reply_markup?: InlineKeyboardMarkup;
    input_message_content?: InputMessageContent;
};
export type InlineQueryResultArticle = {
    type?: string;
    id?: string;
    title?: string;
    input_message_content?: InputMessageContent;
    reply_markup?: InlineKeyboardMarkup;
    url?: string;
    hide_url?: boolean;
    description?: string;
    thumb_url?: string;
    thumb_width?: number;
    thumb_height?: number;
};
export type InlineQueryResultAudio = {
    type?: string;
    id?: string;
    audio_url?: string;
    title?: string;
    caption?: string;
    parse_mode?: string;
    caption_entities?: MessageEntity[];
    performer?: string;
    audio_duration?: number;
    reply_markup?: InlineKeyboardMarkup;
    input_message_content?: InputMessageContent;
};
export type InlineQueryResultContact = {
    type?: string;
    id?: string;
    phone_number?: string;
    first_name?: string;
    last_name?: string;
    vcard?: string;
    reply_markup?: InlineKeyboardMarkup;
    input_message_content?: InputMessageContent;
    thumb_url?: string;
    thumb_width?: number;
    thumb_height?: number;
};
export type InlineQueryResultGame = {
    type?: string;
    id?: string;
    game_short_name?: string;
    reply_markup?: InlineKeyboardMarkup;
};
export type InlineQueryResultDocument = {
    type?: string;
    id?: string;
    title?: string;
    caption?: string;
    parse_mode?: string;
    caption_entities?: MessageEntity[];
    document_url?: string;
    mime_type?: string;
    description?: string;
    reply_markup?: InlineKeyboardMarkup;
    input_message_content?: InputMessageContent;
    thumb_url?: string;
    thumb_width?: number;
    thumb_height?: number;
};
export type InlineQueryResultGif = {
    type?: string;
    id?: string;
    gif_url?: string;
    gif_width?: number;
    gif_height?: number;
    gif_duration?: number;
    thumb_url?: string;
    thumb_mime_type?: string;
    title?: string;
    caption?: string;
    parse_mode?: string;
    caption_entities?: MessageEntity[];
    reply_markup?: InlineKeyboardMarkup;
    input_message_content?: InputMessageContent;
};
export type InlineQueryResultLocation = {
    type?: string;
    id?: string;
    latitude?: number;
    longitude?: number;
    title?: string;
    horizontal_accuracy?: number;
    live_period?: number;
    heading?: number;
    proximity_alert_radius?: number;
    reply_markup?: InlineKeyboardMarkup;
    input_message_content?: InputMessageContent;
    thumb_url?: string;
    thumb_width?: number;
    thumb_height?: number;
};
export type InlineQueryResultMpeg4Gif = {
    type?: string;
    id?: string;
    mpeg4_url?: string;
    mpeg4_width?: number;
    mpeg4_height?: number;
    mpeg4_duration?: number;
    thumb_url?: string;
    thumb_mime_type?: string;
    title?: string;
    caption?: string;
    parse_mode?: string;
    caption_entities?: MessageEntity[];
    reply_markup?: InlineKeyboardMarkup;
    input_message_content?: InputMessageContent;
};
export type InlineQueryResultPhoto = {
    type?: string;
    id?: string;
    photo_url?: string;
    thumb_url?: string;
    photo_width?: number;
    photo_height?: number;
    title?: string;
    description?: string;
    caption?: string;
    parse_mode?: string;
    caption_entities?: MessageEntity[];
    reply_markup?: InlineKeyboardMarkup;
    input_message_content?: InputMessageContent;
};
export type InlineQueryResultVenue = {
    type?: string;
    id?: string;
    latitude?: number;
    longitude?: number;
    title?: string;
    address?: string;
    foursquare_id?: string;
    foursquare_type?: string;
    google_place_id?: string;
    google_place_type?: string;
    reply_markup?: InlineKeyboardMarkup;
    input_message_content?: InputMessageContent;
    thumb_url?: string;
    thumb_width?: number;
    thumb_height?: number;
};
export type InlineQueryResultVideo = {
    type?: string;
    id?: string;
    video_url?: string;
    mime_type?: string;
    thumb_url?: string;
    title?: string;
    caption?: string;
    parse_mode?: string;
    caption_entities?: MessageEntity[];
    video_width?: number;
    video_height?: number;
    video_duration?: number;
    description?: string;
    reply_markup?: InlineKeyboardMarkup;
    input_message_content?: InputMessageContent;
};
export type InlineQueryResultVoice = {
    type?: string;
    id?: string;
    voice_url?: string;
    title?: string;
    caption?: string;
    parse_mode?: string;
    caption_entities?: MessageEntity[];
    voice_duration?: number;
    reply_markup?: InlineKeyboardMarkup;
    input_message_content?: InputMessageContent;
};
export type InputTextMessageContent = {
    message_text?: string;
    parse_mode?: string;
    entities?: MessageEntity[];
    disable_web_page_preview?: boolean;
};
export type InputLocationMessageContent = {
    latitude?: number;
    longitude?: number;
    horizontal_accuracy?: number;
    live_period?: number;
    heading?: number;
    proximity_alert_radius?: number;
};
export type InputVenueMessageContent = {
    latitude?: number;
    longitude?: number;
    title?: string;
    address?: string;
    foursquare_id?: string;
    foursquare_type?: string;
    google_place_id?: string;
    google_place_type?: string;
};
export type InputContactMessageContent = {
    phone_number?: string;
    first_name?: string;
    last_name?: string;
    vcard?: string;
};
export type InputInvoiceMessageContent = {
    title?: string;
    description?: string;
    payload?: string;
    provider_token?: string;
    currency?: string;
    prices?: LabeledPrice[];
    max_tip_amount?: number;
    suggested_tip_amounts?: number[];
    provider_data?: string;
    photo_url?: string;
    photo_size?: number;
    photo_width?: number;
    photo_height?: number;
    need_name?: boolean;
    need_phone_number?: boolean;
    need_email?: boolean;
    need_shipping_address?: boolean;
    send_phone_number_to_provider?: boolean;
    send_email_to_provider?: boolean;
    is_flexible?: boolean;
};
export type InputMessageContent = {
    result_id?: string;
    from?: User;
    location?: Location;
    inline_message_id?: string;
    query?: string;
};
export type ChosenInlineResult = {
    result_id?: string;
    from?: User;
    location?: Location;
    inline_message_id?: string;
    query?: string;
};
export type SentWebAppMessage = {
    inline_message_id?: string;
};
export type LabeledPrice = {
    label?: string;
    amount?: number;
};
export type Invoice = {
    title?: string;
    description?: string;
    start_parameter?: string;
    currency?: string;
    total_amount?: number;
};
export type ShippingAddress = {
    country_code?: string;
    state?: string;
    city?: string;
    street_line1?: string;
    street_line2?: string;
    post_code?: string;
};
export type OrderInfo = {
    name?: string;
    phone_number?: string;
    email?: string;
    shipping_address?: ShippingAddress;
};
export type ShippingOption = {
    id?: string;
    title?: string;
    prices?: LabeledPrice[];
};
export type SuccessfulPayment = {
    currency?: string;
    total_amount?: number;
    invoice_payload?: string;
    shipping_option_id?: string;
    order_info?: OrderInfo;
    telegram_payment_charge_id?: string;
    provider_payment_charge_id?: string;
};
export type ShippingQuery = {
    id?: string;
    from?: User;
    invoice_payload?: string;
    shipping_address?: ShippingAddress;
};
export type PreCheckoutQuery = {
    id?: string;
    from?: User;
    currency?: string;
    total_amount?: number;
    invoice_payload?: string;
    shipping_option_id?: string;
    order_info?: OrderInfo;
};
export type PassportData = {
    data?: EncryptedPassportElement[];
    credentials?: EncryptedCredentials;
};
export type PassportFile = {
    file_id?: string;
    file_unique_id?: string;
    file_size?: number;
    file_date?: number;
};
export type EncryptedPassportElement = {
    type?: string;
    data?: string;
    phone_number?: string;
    email?: string;
    files?: PassportFile[];
    front_side?: PassportFile;
    reverse_side?: PassportFile;
    selfie?: PassportFile;
    translation?: PassportFile[];
    hash?: string;
};
export type EncryptedCredentials = {
    data?: string;
    hash?: string;
    secret?: string;
};
export type PassportElementError = {};
export type PassportElementErrorDataField = {
    source?: string;
    type?: string;
    field_name?: string;
    data_hash?: string;
    message?: string;
};
export type PassportElementErrorFrontSide = {
    source?: string;
    type?: string;
    file_hash?: string;
    message?: string;
};
export type PassportElementErrorReverseSide = {
    source?: string;
    type?: string;
    file_hash?: string;
    message?: string;
};
export type PassportElementErrorSelfie = {
    source?: string;
    type?: string;
    file_hash?: string;
    message?: string;
};
export type PassportElementErrorFile = {
    source?: string;
    type?: string;
    file_hash?: string;
    message?: string;
};
export type PassportElementErrorFiles = {
    source?: string;
    type?: string;
    file_hashes?: string[];
    message?: string;
};
export type PassportElementErrorTranslationFile = {
    source?: string;
    type?: string;
    file_hash?: string;
    message?: string;
};
export type PassportElementErrorTranslationFiles = {
    source?: string;
    type?: string;
    file_hashes?: string[];
    message?: string;
};
export type PassportElementErrorUnspecified = {
    source?: string;
    type?: string;
    element_hash?: string;
    message?: string;
};
export type Game = {
    title?: string;
    description?: string;
    photo?: PhotoSize[];
    text?: string;
    text_entities?: MessageEntity[];
    animation?: Animation;
};
export type CallbackGame = {};
export type GameHighScore = {
    position?: number;
    user?: User;
    score?: number;
};
