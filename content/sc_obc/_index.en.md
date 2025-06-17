+++
+++

{% section_title(bg="images/bg.jpg", title="Use Cases", subtitle="", slogan="") %}
~render~
{% end %}

{% quick_jump(
  title1="Product Overview", scroll_y1=300,
  title2="使用実績", scroll_y2=1200,
  title3="Dev Kits / Product Options", scroll_y3=2700,
  title4="製品スペック", scroll_y4=3000,
  title5="ドキュメントとリソース", scroll_y5=3500
) %}
~render~
{% end %}

{% twocoltwo(
  title="Product Overview",
  img="sq_sc-obc_module_a1.png",
  alt="",
  link="",
  link_text="",
  img_link="",
  bg="",
  subtitle="(OBC)",
  slogan="SC-OBC Module A1"
) %}
This is a space-grade computer optimized for CubeSats, based on the reliability design technologies developed by JAXA for the International Space Station.
<br><br>
It adopts the Xilinx Artix-7 FPGA, allowing for flexible customization of interface types and quantities to meet user-specific needs. 
<br><br>
It is also suitable for use in spacecraft beyond CubeSats, as well as in terrestrial industrial applications.
{% end %}

{% section_title(bg="images/bg.jpg", title="Dev Kits / Product Options", subtitle="", slogan="") %}
~render~
{% end %}

{% twocard(
  title="",
  subtitle="",
  
  left_card_image="under_construction.jpeg",
  right_card_image="under_construction.jpeg",
  
  left_card_title="開発セット",
  left_card_subtitle="coming soon",
  
  right_card_title="オプション製品",
  right_card_subtitle="coming soon",
  
  bg=""
) %}
~render~
{% end %}

<!--TODO: Add product specs element -->

{% section_title(bg="images/bg.jpg", title="Use Cases", subtitle="Current projects", slogan="") %}
~render~
{% end %}

{% twocard(
  title="",
  subtitle="",
  
  left_card_image="interface.jpg",
  right_card_image="satellite.jpg",
  
  left_card_title="",
  left_card_subtitle="For mounting on our satellite, <br><br> the SC-OBC Module A1 is installed on an interface board shaped to fit the PC104 form factor.",
  
  right_card_title="",
  right_card_subtitle="A satellite integrating the SC-OBC Module A1 mounted on the interface board. <br><br> (Photo shows a prototype under development)",
  
  bg=""
) %}
~render~
{% end %}

{% prefooter(
  left_card_image="about.png", 
  right_card_image="ide.webp",

  left_title="ABOUT US",
  left_subtitle="Company Details",
  left_footer_1="We are always looking for people to work with us.",
  left_footer_2="If you're interested, please contact us.",
  left_link="/en/about_us",

  right_title="RECRUIT",
  right_subtitle="Work With Us",
  right_footer_1="Feel free to contact us.",
  right_footer_2="We will get back to you soon.",
  right_link="/en/recruit",

  bottom_card_image="earth.png",
  bottom_title="CONTACT",
  bottom_subtitle="Send Us a Message",
  bottom_footer_1="We believe in collaboration, creativity, and community.",
  bottom_footer_2="Start your journey with us today.",
  bottom_link="/en/contact",

  bg=""
) %}
~render~
{% end %}

