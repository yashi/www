+++
+++

{% twocoltwo(
  title="PRODUCTS",
  img="",
  alt="",
  link="",
  link_text="",
  img_link="",
  bg="/static/images/white_pcb.png",
  subtitle="",
  slogan=""
) %}
小型衛星向け 
<br><br>
宇宙用コンピュータモジュール 
{% end %}

{% threecard(
  title="株式会社 Space Cubics は...",
  subtitle="低価格な宇宙用コンピュータと宇宙開発に関するトータルサポートを提供することで、<br><br>宇宙開発への参入を手軽にし、日本はもとよりアジアを中心とした民間の宇宙産業発展に貢献します。",
  left_card_image="",
  middle_card_image="",
  right_card_image="",
  left_card_title="コスト削減と信頼性",
  left_card_subtitle="宇宙機器の開発では、予算が限られているため、安価な汎用コンピュータを採用することがありますが、放射線が非常に強い宇宙空間での動作に対する信頼性に不安が残るかもしれません。<br><br>信頼性を高めるためには、放射線耐性が高い部品が搭載されたコンピュータを採用する選択肢がありますが、これらの製品は高価格であり、かつ製品を購入するだけでは宇宙でのミッションで起こる全てのトラブルを解決できるわけではありません。<br><br>株式会社 Space Cubicsは、低コストでありながら、宇宙機器に必要な高い信頼性を持つ製品を提供します。",
  middle_card_title="耐障害性",
  middle_card_subtitle="一般に、ほとんどの高信頼性コンピュータには耐障害性機能が標準で備わっていません。<br><br>たとえ放射線耐性が高い部品が搭載されているコンピュータでも、強い放射線によって引き起こされる障害（記憶されているデータが化けてしまうなど）が起こることがあります。<br><br> 宇宙機器の場合、ハードウェアに障害が発生しても部品交換はできず、またソフトウェアの問題でも地上から復旧は困難です。<br><br> 株式会社 Space Cubicsの製品は障害は必ず起こるものだという前提のもと、障害からの速やかな復旧が重要だという考えに基づき、多くの耐障害性機能を備えています。",
  right_card_title="使いやすさ",
  right_card_subtitle="株式会社 Space Cubicsの製品の最も良いところは、ユーザーがミッションに必要な機能の開発だけに専念することができることです。<br><br>我々の製品には、耐障害性機能以外にも、宇宙機器でよく使用されるミドルウェアやプロトコル(ISS互換ネットワークプロトコル、TTEthernet、cFSなど)や、宇宙以外の分野でよく使われているROS(Robot Operating System)などもサポートします。<br><br>また、ソフトウェアやハードウェア(CPUボード、FPGA)のカスタム開発やコンサルティングも承ります。",

  bg=""
) %}
~render~
{% end %}

<!--TODO: Make new shortcode for product display element -->

{% twocoltwo(
  title="SC-OBC Module A1",
  img="sq_sc-obc_module_a1.png",
  alt="Diagram",
  link="/sc_obc",
  link_text="Read More",
  img_link="/sc_obc",
  bg="no_img.png",
  subtitle="(OBC)",
  slogan="Command & Data Handling"
) %}
JAXAが国際宇宙ステーションで培った信頼性設計技術を基にキューブサット用に最適設計した宇宙用コンピュータです。
<br> <br> 
Xilinx製 Artix-7 FPGAを採用し、インターフェースの種類や数をユーザ毎に柔軟に対応することができます。キューブサット以外の宇宙機や地上の産業用途にも使用可能です。
<br> 
宇宙用コンピュータモジュール 
{% end %}


{% prefooter(
  left_card_image="about.png", 
  right_card_image="ide.webp",

  left_title="ABOUT US",
  left_subtitle="採用情報",
  left_footer_1="一緒に働くメンバーを常に募集しています。",
  left_footer_2="ご興味のある方はご連絡ください。",
  left_link="/about_us",

  right_title="RECRUIT",
  right_subtitle="お問い合わせ",
  right_footer_1="お気軽にお問い合わせください。",
  right_footer_2="担当者よりご返信いたします",
  right_link="/recruit",

  bottom_card_image="earth.png",
  bottom_title="CONTACT",
  bottom_subtitle="Be part of something bigger",
  bottom_footer_1="We believe in collaboration, creativity, and community.",
  bottom_footer_2="Start your journey with us today.",
  bottom_link="/contact",

  bg=""
) %}
~render~
{% end %}
