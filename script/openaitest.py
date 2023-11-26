from openai import OpenAI
import sys
sys.stdout.reconfigure(encoding='utf-8')

client = OpenAI()

completion = client.chat.completions.create(
  model="gpt-4-1106-preview",
  messages=[
    {"role": "system", "content": "You are factual assistant, you follow scientific facts and answers are brief."},
    {"role": "user", "content": "V jedné větě stručně rozhodni, zda pacient trpí diabetes melitus na základě následující lékařské zprávy: RA: bezv. DM v rodině - babička ve staří  PA: ochutnávač/ka  OA: DM 1.typu od 22.2.2018, počátek s typic. příznaky, DKA, léčba intenzifikovaným inzulínovým režimem  komp. - HbA1c 88mmol/mol. Zhubnul 6kg.  Účastnil se studie Diagnode, kde úplná remise cca 1,5 roku po podávání protilátky. Poté včas nenasadil dekkvátní dávky inzulínu a hospitalizován s poč. ketoacidosou.  st.p. hernioplastice 2001  AT: konzumace alkoholu:  přílež.  kouření: 20/d    EA: 2 dávky očkování proti COVID-19, poslední 6/2021, COVID+ 1/2022"}
  ]
)

print(completion.choices[0].message)
