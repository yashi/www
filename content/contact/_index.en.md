+++
title = "Contact"
template = "contact.html"
+++
{% contact_form(
  title="JOIN OUR TEAM",
  subtitle="We are always looking for team members to work with us.",
  name_field="Name",
  email_field="Email address",
  role_field="Desired role?",
  message_field="Message",
  button_label="Send"
) %}
~render~
{% end %}
