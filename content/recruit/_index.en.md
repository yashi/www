+++
sort_by = "date"
+++

{% section_title(bg="", title="RECRUIT", subtitle="Employment information", slogan="", style_top="Job Details") %}
<!--display element -->
{% end %}

{% twocol(
  bg="earth.png",
  title="",
  subtitle="",
  slogan="",
  img="",
  alt="",
  link="",
  link_text="",
  img_link=""
) %}
<!-- no text -->
{% end %}

{% recruit_intro(
  title = "We are always looking for new members to join our team. <br><br> If you are interested, please contact us using the application form.",
  body_text = "
 Space Cubics, Inc. is a company founded by engineers who met through their work in space and computer science. We genuinely enjoy engineering and design and develop computers that can be used in the harsh and extreme environments of space.
<br><br>
 Some of us are experts in space, others in computer architecture and logic, and still others in software development—each with absolute confidence in their own field.However, there are countless problems that cannot be solved alone, so we work together with trusted colleagues every day to tackle these challenges. There is no sense of hierarchy or superiority among us; we are all unique individuals who can achieve great things and improve ourselves every day because we are part of this team.
 <br><br>
Space Cubics is still a small company and does not yet have the capacity to complete large projects on its own.If you are interested in designing, manufacturing, or selling spacecraft, or if you find ordinary computers on the ground too mundane, or if you have various reasons why you cannot create the things you envision, please contact us. However, if you are someone who only criticizes others' work and proposes alternatives without offering solutions, or if you belittle others, even if you are highly skilled, we kindly ask you to refrain from applying."
) %}
<!-- no text -->
{% end %}

{% jobs_list(
  title = "Open Positions",
  subtitle = "Current available",
  slogan = "POSITIONS",
  jobs_note = "Special notes: For positions other than those currently being recruited, please inquire via the inquiry form.",
  jobs = "
System Engineer | system-engineer/ | active
Communications Engineer |
Fundraising Manager |
FPGA Engineer |
Hardware Engineer |
Promotion Engineer |
Sales |
Structural Engineer |
Thermal Engineer |
") %}
<!-- no text -->
{% end %}



{% application_form(
  title = "CONTACT FORM",
  subtitle = "Join us",
  slogan = "SPACE CUBICS",
  name_field="Name"
  email_field="Email adress"
  role_field="Desired position"
  message_field="Please enter your message here"
  button_label="Send"
  description = "Please fill out the form on the right. Please be sure to fill out all fields. We will contact you as soon as possible."
) %}
<!-- no text -->
{% end %}

{% prefooter(
  left_card_image="about.png", 
  right_card_image="earth.png",

  left_title="ABOUT US",
  left_subtitle="Company details",
  left_footer_1="We are always looking for new members to join our team.",
  left_footer_2="If you are interested, please contact us.",
  left_link="/about_us",

  right_title="CONTACT",
  right_subtitle="Send us a message",
  right_footer_1="Please feel free to contact us.",
  right_footer_2="A representative will respond to you.",
  right_link="/contact",

  bottom_card_image = "<!--display element -->",
  bottom_title="PRODUCTS",
  bottom_subtitle="Board introduction",
  bottom_footer_1="We provide reliable products and",
  bottom_footer_2="support space development.",
  bottom_link="/products",

  bg=""
) %}
<!--display element -->
{% end %}
