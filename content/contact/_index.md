+++
title = "Contact"
template = "contact.html"
+++
{% contact_form(
  title="Get in Touch",
  subtitle="We're here to help you.",
  name_field="Your name here please",
  email_field="Enter your email address",
  role_field="What is your role?",
  message_field="Your message here please",
  button_label="Send Message"
) %}
~render~
{% end %}
