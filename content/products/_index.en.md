+++
+++

{% twocoltwo(
  title="PRODUCTS",
  img="",
  alt="",
  link="",
  link_text="",
  img_link="",
  bg="white_pcb.png",
  subtitle="",
  slogan=""
) %}
Space Cubics Inc.
{% end %}


{% threecard(
  title="What Space Cubics Inc. Offers...",
  subtitle="By providing affordable space-grade computers and comprehensive support for space development,
  
  <br><br>
  
  we make entering the space industry more accessible and contribute to the growth of private space enterprises, particularly in Japan and across Asia.",
  left_card_image="dark_earth.png",
  middle_card_image="Mars_solis_lacus.PNG",
  right_card_image="Messier.jpeg",
  left_card_title="Cost Reduction & Reliability",
  left_card_subtitle="In spacecraft development, limited budgets often lead to the use of inexpensive general-purpose computers. 

  However, these may lack the reliability needed to function in the highly radioactive space environment.
  
  <br><br>
  
  To improve reliability, one option is to use computers with radiation-hardened components, but such systems are expensive—and simply purchasing them does not guarantee a trouble-free mission.
  
  <br><br>
  
  Space Cubics Inc. offers products that combine low cost with the high reliability required for space equipment.",
  
  middle_card_title="Fault Tolerance",
  middle_card_subtitle="Most high-reliability computers do not come standard with fault-tolerance features.
  
  <br><br>
  
  Even if a computer is built with radiation-resistant components, strong radiation can still cause issues like data corruption.
  
  <br><br>
  
  In spacecraft, hardware failures can't be fixed by replacing parts, and even software issues are difficult to recover from remotely.
  
  <br><br>
  
  Space Cubics Inc. assumes that failures will occur and focuses on fast recovery, equipping our products with many fault-tolerant features.",

  right_card_title="Ease of Use",
  right_card_subtitle="What sets Space Cubics Inc. products apart is that users can focus solely on developing mission-specific functionality.
  
  <br><br>
  
  Beyond fault tolerance, our products also support commonly used middleware and protocols in space applications (such as ISS-compatible network protocols, TTEthernet, and cFS), as well as widely used frameworks outside the space industry like ROS (Robot Operating System).
  
  <br><br>
  
  We also offer custom development and consulting for both software and hardware (CPU boards, FPGA).",

  bg=""
) %}
~render~
{% end %}

{% twocoltwo(
  title="SC-OBC Module A1",
  img="sq_sc-obc_module_a1.png",
  alt="Diagram",
  link="https://sc-obc-fpga-technical-reference-manual.readthedocs.io/ja/latest/",
  link_text="",
  img_link="https://sc-obc-fpga-technical-reference-manual.readthedocs.io/ja/latest/",
  bg="no_img.png",
  subtitle="(OBC)",
  slogan="Command & Data Handling"
) %}
This is a space-grade computer optimized for CubeSats, based on the reliability design technologies developed by JAXA for the International Space Station.
<br><br>
It adopts the Xilinx Artix-7 FPGA, allowing for flexible customization of interface types and quantities to meet user-specific needs. 
<br><br>
It is also suitable for use in spacecraft beyond CubeSats, as well as in terrestrial industrial applications.
{% end %}


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
  left_link="/recruit",

  right_title="RECRUIT",
  right_subtitle="Work With Us",
  right_footer_1="Feel free to contact us.",
  right_footer_2="We will get back to you soon.",
  right_link="/contact",

  bottom_card_image="earth.png",
  bottom_title="CONTACT",
  bottom_subtitle="Send Us a Message",
  bottom_footer_1="We believe in collaboration, creativity, and community.",
  bottom_footer_2="Start your journey with us today.",
  bottom_link="/join",

  bg=""
) %}
~render~
{% end %}

