+++
title = "Contact"
template = "contact.html"
+++
{% contact_form(
  title="JOIN OUR TEAM",
  subtitle="We are always looking for team members to work with us.",
  name_field="Name",
  email_field="Email address",
  role_field="Desired role",
  message_field="Message",
  button_label="Send"
) %}
~render~
{% end %}

{% prefooter(
  left_card_image="about.png", 
  right_card_image="ide.webp",

  left_title="ABOUT US",
  left_subtitle="採用情報",
  left_footer_1="一緒に働くメンバーを常に募集しています。",
  left_footer_2="ご興味のある方はご連絡ください。",
  left_link="/recruit",

  right_title="RECRUIT",
  right_subtitle="お問い合わせ",
  right_footer_1="お気軽にお問い合わせください。",
  right_footer_2="担当者よりご返信いたします",
  right_link="/contact",

  bottom_card_image="white_pcb.png",
  bottom_title="PRODUCTS",
  bottom_subtitle="Be part of something bigger",
  bottom_footer_1="We believe in collaboration, creativity, and community.",
  bottom_footer_2="Start your journey with us today.",
  bottom_link="/join",

  bg=""
) %}
~render~
{% end %}
