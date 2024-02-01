ก่อนที่จะมาคุยกันเรื่อง tdd ต้องเกริ่นก่อนว่า software testing คืออะไร

ถ้าเราไม่ได้มีการทำการทดสอบผลิตภัณฑ์ ของเราให้ดี สิ่งที่จะเกิดขึ้นใน ผลิตภัณฑ์ คือข้อบกพร่องที่มากมาย
ยิ่งข้อบกพร่องเยอะ ส่งผลทำให้เกิด ความเชื่อมั่นของลูกค้าที่ใช้ผลิตภัณฑ์ของเรา และผลิตภัณฑ์อื่นๆที่เราทำการผลิต
และการแข่งขันที่สูงของธุรกิจ ถ้าบกพร่องเยอะ ลูกค้าอาจจะ ไปใช้ผลิตภัณฑ์อื่นที่เหมือนๆกัน การทำ software testing ก็มีหลายระดับ
แต่เราจะพูดถึง unit test

ก่อนอื่นเลย unit test คืออะไร
unit test คือการทดสอบหน่วยที่เล็กที่สุดของพฤติกรรม เช่น เว็บ e-commerce หน่วยของตะกร้าเราสามารถ เพิ่ม หรือ ลบ ข้อมูลในตะกร้า
ได้ หน่วยของการคำนวณภาษี หน่วยของค่าจัดส่ง

อะไรที่ไม่ใช่ unit test
เราจะยกเรื่องe-commerce แบบเดิม เช่น การคำนวณยอดสินค้าในตะกร้า สิ่งนี้ไม่ใช่ unit test 
เพราะเป็นการ รวมสินค้า และการคำนวณภาษี การคำนวณการจัดส่งใน function เดียวกัน สิ่งนี้จะเรียกว่า intregrate test

เมื่อไหร่ที่ควรเขียน unit test
นักพัฒนาในผลิตภัณฑ์ อาจจะมีการเพิ่มจำนวน เนื่องจากผลิตภัณฑ์ที่เติมโตขึ้น และถ้านักพัฒนาดำเนินการพัฒนา feature ใหม่ๆ
จะรู้ได้อย่างไรว่า feature ที่เพิ่มเข้ามาจะไม่กระทบ กับ code เก่า หรือ นักพัฒนาใหม่ที่เพิ่งเข้ามาร่วมทีม จะแก้ไขโค้ด และจะไม่เกิด bug
software จะเติบโตตามธุรกิจ เหมือนโลกที่ไม่หยุดหมุน ดังนั้น เราจะต้องสร้างความมั่นใจว่าสิ่งที่เพิ่มเข้ามาใหม่สามารถทำงานได้ และ ไม่ทำให้
สิ่งเดิม ได้รับผลกระทบให้ใช้งานไม่ได้ เราจึงต้องมี unit test ในการทำควบคู่ไปกับผลิตภัณฑ์ 

เขียน code ก่อนเขียน test ?
การที่เราเขียน code ก่อนเทสเป็นการทำงานที่ทำไปก่อนแล้วมาตรวจสอบทีหลัง สิ่งที่จะเกิดขึ้นก็จะเป็นการเข้าข้างตัวเองเป็นส่วนนึง
เช่น สมมุติว่าเป็นเป็นการตัดไม้ จะตัดได้ดีก็ต้องวัดก่อนซื้อการวัดคือการเทส แต่ถ้าเราทำงานก่อนแล้วมาตรวจสอบ บางทีอาจจะตัดเกิน หรือตัดขาด
แล้วเราก็เข้าข้างตัวเองว่า ตรงและพอได้อะไรอย่างงี้ เพราะงั้นการตรวจสอบ กับ การทำงาน ควรทำไปควบคู่กัน สิ่งนี้จะเรียกว่า TDD(test driven development)

