+++
title = "Contact"
template = "contact.html"
+++
{% contact_form(
  title="JOIN OUR TEAM",
  subtitle="一緒に働くメンバーを常に募集しています。",
  name_field="お名前"
  email_field="メールアドレス"
  role_field="役職"
  message_field="メッセージを入力してください"
  button_label="送信"
) %}
~render~
{% end %}
