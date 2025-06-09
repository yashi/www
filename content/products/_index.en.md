+++
+++

{% section_title(bg="images/bg.jpg", title="PRODUCTS", subtitle="Make the impossible", slogan="POSSIBLE") %}
~render~
{% end %}

{% twocol(title="", img="", alt="", link="", link_text="Read More", img_link="", bg="white_pcb.png") %}
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


{% section_title(bg="", title="Onboard Computer", subtitle="(OBC)", slogan="Command & Data Handling") %}
~render~
{% end %}

{% twocol(
  title="SC-OBC Module A1",
  img="sc_obcpic.png",
  alt="Diagram",
  link="https://sc-obc-fpga-technical-reference-manual.readthedocs.io/ja/latest/",
  link_text="Read More",
  img_link="https://sc-obc-fpga-technical-reference-manual.readthedocs.io/ja/latest/",
  bg=""
) %}

<br><br>

This is a space-grade computer optimized for CubeSats, based on the reliability design technologies developed by JAXA for the International Space Station.

<br><br>

It adopts the Xilinx Artix-7 FPGA, allowing for flexible customization of interface types and quantities to meet user-specific needs. 
It is also suitable for use in spacecraft beyond CubeSats, as well as in terrestrial industrial applications.

<br>

{% end %}

{% section_title(bg="images/bg.jpg", title="Use Cases", subtitle="Current projects", slogan="") %}
~render~
{% end %}

{% twocol(title="", img="ex_img_1.webp", alt="", link="", link_text="", img_link="", bg="") %}
To be mounted on our company’s satellite,

<br>

the SC-OBC Module A1 is installed

<br>

on an interface board shaped to fit the PC104 form factor.
{% end %}

{% twocol(title="", img="ex_img_2.png", alt="", link="", link_text="", img_link="", bg="") %}
A satellite integrating the

<br>

SC-OBC Module A1 mounted on the interface board.

<br>

(Photo shows a prototype under development)
{% end %}

{% prefooter(
  left_card_image="dark_earth.png", 
  right_card_image="ide.webp",

  left_title="RECRUIT",
  left_subtitle="Career opportunities",
  left_footer_1="We are always looking for new members to join our team.",
  left_footer_2="Take a look at our open positions.",
  left_link="/recruit",

  right_title="CONTACT",
  right_subtitle="Make an inquiry",
  right_footer_1="Please feel free to contact us.",
  right_footer_2="We will try to get back to you promptly.",
  right_link="/contact",

  bottom_card_image="placeholder.jpg",
  bottom_title="JOIN US",
  bottom_subtitle="Be part of something bigger",
  bottom_footer_1="We believe in collaboration, creativity, and community.",
  bottom_footer_2="Start your journey with us today.",
  bottom_link="/join",

  bg=""
) %}
~render~
{% end %}
