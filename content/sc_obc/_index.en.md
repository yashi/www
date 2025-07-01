+++
+++

{% section_title(bg="", title="Use Cases", subtitle="", slogan="") %}
<!--display element -->
{% end %}

{% quick_jump(
  title1="Product overview", id1="section-summary",
  title2="Use cases", id2="section-usage",
  title3="Dev kit", id3="section-devkit",
  title4="Specifications", id4="section-specs",
  title5="Docs / resources", id5="section-docs"
) %}
<!--display element -->
{% end %}

<section id="section-summary">
  {% hero_element(
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
</section>

<section id="section-usage">
  {% section_title(bg="", title="Use cases", subtitle="Current projects", slogan="") %}
  <!--display element -->
  {% end %}
</section>

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
<!--display element -->
{% end %}

<section id="section-devkit">
  {% section_title(bg="", title="Dev kits / Product options", subtitle="", slogan="") %}
  <!--display element -->
  {% end %}
</section>

{% twocard(
  title="",
  subtitle="",
  
  left_card_image="under_construction.jpeg",
  right_card_image="under_construction.jpeg",
  
  left_card_title="Dev kit",
  left_card_subtitle="coming soon",
  
  right_card_title="Product options",
  right_card_subtitle="coming soon",
  
  bg=""
) %}
<!--display element -->
{% end %}

<section id="section-specs">
  {% spec_sheet(
    bg="",
    title="Specifications",
    subtitle="",
    slogan=""
  ) %}
  Main Processor | Xilinx Artix-7
  Communication Interface | CAN, I2C, UART
  Main CPU | Cortex-M3 / MicroBlaze-V
  FPGA User I/O | 38 pin
  Preinstalled OS | Zephyr RTOS
  PIC User I/O | 3 pin
  Clock Generator | 24 MHz x 2
  Watchdog timer | 1 (IP Core)
  PIC (anomaly detection / system recovery) | 8 bit PIC MCU
  Interface Connector | 80 pin / 0.5 mm pitch
  On-chip SRAM | 64 KByte FPGA Block RAM
  Supply Voltage | DC 5.0 V ± 10%
  On-board SRAM | 4 MBytes
  Power Consumption | 2.0 W (Max)
  NOR Flash Memory (configurable) | 32 MBytes x 2
  External Dimensions | 70 x 70 x 9.6 mm
  FeRAM | 512 KBytes x 2
  Mass | 130 g
  {% end %}
</section>

<section id="section-docs">
  {% docs_resources(
    bg="",
    title="Docs / Resources",
    subtitle="",
    slogan=""
  ) %}
  User Manual | This describes the specifications, communication system, circuit configuration, etc. of SC-OBC Module A1. | https://github.com/spacecubics/scobc-a1-product-manual/blob/main/product_manual.org
  FPGA Hardware Manual | Specifications for FPGA functions and registers necessary for FPGA development and software development are described in this document. | https://sc-obc-fpga-technical-reference-manual.readthedocs.io/ja/latest/
  GitHub | For various other technical information, please click here. | https://github.com/spacecubics
  {% end %}
</section>

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

  bottom_card_image = "<!--display element -->",
  bottom_title="CONTACT",
  bottom_subtitle="Send Us a Message",
  bottom_footer_1="We believe in collaboration, creativity, and community.",
  bottom_footer_2="Start your journey with us today.",
  bottom_link="/en/contact",

  bg=""
) %}
<!--display element -->
{% end %}

