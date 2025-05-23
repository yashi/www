+++
title = ""
+++


{% threecard(
  title="Space Cubics は...",
  subtitle="低価格な宇宙用コンピュータと宇宙開発に関するトータルサポートを提供することで、宇宙開発への参入を手軽にし、日本はもとよりアジアを中心とした民間の宇宙産業発展に貢献します",
  left_card_image="dark_earth.png",
  middle_card_image="Mars_solis_lacus.PNG",
  right_card_image="Messier.jpeg",
  left_card_title="コスト削減と信頼性",
  left_card_subtitle="宇宙機器の開発では、予算が限られているため、安価な汎用コンピュータを採用することがありますが、放射線が非常に強い宇宙空間での動作に対する信頼性に不安が残るかもしれません<br><br>信頼性を高めるためには、放射線耐性が高い部品が搭載されたコンピュータを採用する選択肢がありますが、これらの製品は高価格であり、かつ製品を購入するだけでは宇宙でのミッションで起こる全てのトラブルを解決できるわけではありません。<br><br>Space Cubicsは、低コストでありながら、宇宙機器に必要な高い信頼性を持つ製品を提供します。",
  middle_card_title="耐障害性",
  middle_card_subtitle="一般に、ほとんどの高信頼性コンピュータには耐障害性機能が標準で備わっていません。<br><br>たとえ放射線耐性が高い部品が搭載されているコンピュータでも、強い放射線によって引き起こされる障害（記憶されているデータが化けてしまうなど）が起こることがあります。<br><br> 宇宙機器の場合、ハードウェアに障害が発生しても部品交換はできず、またソフトウェアの問題でも地上から復旧は困難です。<br><br> Space Cubicsの製品は障害は必ず起こるものだという前提のもと、障害からの速やかな復旧が重要だという考えに基づき、多くの耐障害性機能を備えています。<br><br> 例えば、コンピュータを複数台同時に稼働・連携することで冗長性を持たせたり、データ異常が発生することを想定して同じデータを複数個所に保存し、多数決でデータの正当性を判定する機能を備えているので、障害が発生したコンピュータやデータを自動で復旧することができます。<br><br>",
  right_card_title="使いやすさ",
  right_card_subtitle="Space Cubicsの製品の最も良いところは、ユーザーがミッションに必要な機能の開発だけに専念することができることです。<br><br>我々の製品には、耐障害性機能以外にも、宇宙機器でよく使用されるミドルウェアやプロトコル(ISS互換ネットワークプロトコル、TTEthernet、cFSなど)や、宇宙以外の分野でよく使われているROS(Robot Operating System)などもサポートします。<br><br>また、ソフトウェアやハードウェア(CPUボード、FPGA)のカスタム開発やコンサルティングも承ります。",
  left_card_subtitle_style="font-size: 30px;",
  middle_card_subtitle_style="font-size: 30px;",
  right_card_subtitle_style="font-size: 30px;",
  bg=""
) %}
~render~
{% end %}

{% section_title(bg="", title="Onboard Computer", subtitle="(OBC)", slogan="Command & Data Handling") %}
~render~
{% end %}

{% twocol(title="SC-OBC Module A1", img="sc_obcpic.png", alt="Diagram", link="https://sc-obc-fpga-technical-reference-manual.readthedocs.io/ja/latest/", link_text="Read More", img_link="https://sc-obc-fpga-technical-reference-manual.readthedocs.io/ja/latest/", bg="") %}
<br> <br> 
JAXAが国際宇宙ステーションで培った信頼性設計技術を基にキューブサット用に最適設計した宇宙用コンピュータです。
<br> <br> 
Xilinx製 Artix-7 FPGAを採用し、インターフェースの種類や数をユーザ毎に柔軟に対応することができます。キューブサット以外の宇宙機や地上の産業用途にも使用可能です。
<br> 
{% end %}

{% section_title(bg="images/bg.jpg", title="使用例", subtitle="Current projects", slogan="") %}
~render~
{% end %}

{% twocol(title="", img="ex_img_1.webp", alt="", link="", link_text="", img_link="", bg="") %}
弊社人工衛星に搭載するため、<br>
PC104形状に合わせたインタフェースボードの上に
<br>
SC-OBC Module A1を搭載した形態。
{% end %}

{% twocol(title="", img="ex_img_2.png", alt="", link="", link_text="", img_link="", bg="") %}
インタフェースボードに搭載した
<br>
SC-OBC Module A1が組み込まれた人工衛星。
<br>（写真は開発中のもの）
{% end %}

{% twocard(
  left_card_image="earth.png", 
  right_card_image="ide.webp",

  left_title="RECRUIT",
  left_subtitle="採用情報",
  left_footer_1="一緒に働くメンバーを常に募集しています。",
  left_footer_2="ご興味のある方はご連絡ください。",
  left_link="/recruit",

  right_title="CONTACT",
  right_subtitle="お問い合わせ",
  right_footer_1="お気軽にお問い合わせください。",
  right_footer_2="担当者よりご返信いたします",
  right_link="/contact",

  bg=""
) %}
~render~
{% end %}
