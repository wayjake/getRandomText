const express = require("express")
const cors = require("cors")
const bodyParser = require("body-parser")
const fetch = require("node-fetch")

const app = express()
app.use(cors({ origin: true }))
app.use(bodyParser.urlencoded({ extended: true }))

app.get("/", (req, res) => {
   res.send(`absolutely nothing to be found here. definitely don't POST anything here.`)
})

app.get("/v1/", async (req, res) => {
   // @TODO
   const url = `https://libraryofbabel.info/book.cgi`
   const data = {
      hex: `17mm9cuwkjf8uei0jw31tc3sj4g6wjk0dg2i08544tacfemzj4abvvvtzs6i0lfkkvyg4mwl7o3v51kd896p5sp6w320rcrzg8h40dk3klfsf2uwfkbszsg6oi47pa9f0roll5zxghhj6miy6jt7bqfr32179mix8pynbcok757upuvm8c199cbahq2i555942zc0b3818syppbhoomdjnns5fwuo9dyr9h3er08b16mtmqga5nkhx4xdol7o1v9g29pio1nxo7je3tk4kofhb6fmprpfvdpbts0cgdp17nd9qgewyp75j3steth9p17e39c8byaxqtn3cync00uz6bwjwy5vp1num8qlx35biayuwdjjta3k5x0pjm0p1wx962awe3jyppilyxs1tygp74wthhbfpizmhxczhbdjk3b8uxa6hk6klyjlkkd8qo4lrq5760e2ek3exz6u7ka2srdutn5dfjoufskfu3wqlvvdbroc8ea7glfes5ko313btxycpov5eie7b3bg98dbojr54jfbnsg1avntmxp3qu9agn06soutebax1a8jjlnr6lf4hr3px875ec1bhyyqayylzj8s13ei8exk9qxft32op1syo34op692y2b06omkksllk5kdxnk0nv7h5i3t3ca0pzyf93g69t07l16vj4lic9lrecv7jgbmu1lhgvzk6vkzmiad637ug2cougvgyooe09rwoqu1eoro7n7iqep0mbpsbx5s1q7oscjpot0r32nlqwks3cagp69wkqri49wm5jwzxxta9aoq9kg7r2yegq4861ddmhy5yiey5dgghk5qh8vu4pn9p5nivtwz4c74mmyufxrcl4ovcouceqxthij53e99q8mytrqud103ipl7u5ssernd60b64cgnjmgw9aum3599m2c0ewfr1akoqgnfd9in0s68belwzni93v6iopl6oq5uaubqhbmiaa49wyw1tpcpb7vdry0tsaf4ez32xmanr8zl2eljy8tthm1lb1ozypxki0m8vzaqt4kc85pg1r9sm5jg1eom70hpkq8px8jk31sokiut39eyuky67yzi3heao9fp5ftfyskou5etlbdvq7kcotnxxdl7d6tskuzslid1vd36edx8z5qy5ktr41pll6rjzp7yz5awjxmyeva1a6wx45jf52kd4zt91qply5slx3vvgck8g1u9x2y4vuo3kyacjnezsu0sga6cvtxywrhtor7k93mnxo0rjbaqyfyczxpqtv33ezop7b4aw1rn3xy2tg5ytpyrsekb9r4m3uuco5q2ycnov1k2w2aqlgbj3rlbm9a3rkyiwrbgwzzw6pssd3r4gm32v8lw91nbxjey77u1lezngvcvnqv6xv81hzml6mmisgj3vyvgnaep2b6tqpvxaa5cba8a19if4wckss8jp25boqsbl7vwid40dgwqh1b8k5nc0mgr76getjkbl11f1s9aziimds8dyx5ghqqwmm7z6i0rsg7qe27iqcnoauxqrgt1cybkoyfk1oeos7c8irpw6tsxw1raiq3eumhm2h5vlkzxwcav2v43ydlcy94c1qc6y6r3ujxeb4zm0n9pzatt5iwspywy47jrbmqw129089jmx99le7fairwt08ei9lu1y0elnasbj4ffcd3nakyeg7esbpsz2i76zehc41s7wxtye5regoixe00fydppouwu5yc4chv3e5kg603meoiss4xrctl9oudhxpa0gdakbbhxgnfsocke2y2t15arlnqy00a5a0bt6th1mzg6c3y5wccosxcjwelvyt18q1mzrgvyjxa8303p3bcnw1j37s4vce52wwqhydajmnnhfjvfofvi5r26pjfm5vxx24i0k3pxylqyi7vp1h2020wv3fv7xfkoscz9qf5ijmu4owd52fkk9l8k7utwez4yrgz8u6a8hju2inygtswdgbxjgf65p1xtuulxwxzfbkp2onlkn4bkh5mdp2zmn8kcq6c2v0v4mhz55cksbufxmag5i22kh0sw87dp1kw3psneh7o30fqnnmbfrhg7sjgshcqb93zb5tq50qgh0omhj9hej1j0ieb4ut5dsfvztt6t7ks69nuziykdjs7l6vvy3yfoxrgtzvhoelhleima5zrz4vlhg3xfzmtcsaobi77tzztb00d9gmljjuysl5vzb7tnk0ej52c2cms2abhvyc1okm50r0kw5dywur573qu4ov3q0j6hrwzi7bvtp52bq83qko3wn803rlet2md2g24iv3wt3moyvgy8ne4m2whuujju1o822pmi7obq0g4bz7vnjbwsttedls090lw1thsr3x0ga13vblpzb1czqvwoq8mxzl265cudnm718n7rgwlus3d4trcr0h7w3urp82sexns861m50s7tnzvo8r0xq9n4i9fl9smzs7ttv7o7qpcz9f6m7jdx1bns799a9cmtp356okt9muckedcjh06bxqxzqhi4kc20efdl6n3x44uqyhagk4kl25831g52n77njnm2zdvi1uf4g8bmu25ai4ri7ssrj2pilsgj1t0ppnc7xfhytqhq4ruai2ui372gk3p87yraew5dr6u7w4ynx7yt8tuixytfs8wqyoispy0ak2qj3z5zddmsu2gh48mvyi6g9cn24r16whbz0wxy7rr1930yvlyiw1j9pp1m6aodbvh2mso7f5fb68ux9jrjf76k9zr8f43fkvam0f8lqm9cpe8euxa7u9x7gx3trzfhlp0cmsn1c3zz1w9sfmqtofhugn8vgwrzlatkxu03si9muweuy3k24dcrqwfs1s70p1v0ybiln69bzfoic3pp424o7vlub925vnc5dvolerp2kljv8hgk04a5d502vpplyc5imfb988chvawy2w989441g2a9cjyafd32qmxn7bkl917yqqur9e1bgxnro4pankxwew8tkidruvhq2j6wafct95sj4frj9dif7dpof4acerxb5i56y5lkdxfw3ekl8rhygem5r8b3mpuljlkv9wtmolkjwtrvm40sy82i52joo6gywk61f56au1racvi9l5eevpbn3y4rdam63p19atsuy7ehmc4bhc77nmp36x5orlhjp148zaayf2iraavr4p2016fl8vcl539rhshalbjghax53hji1b1lmdridpeznkxgjphf6gkp4jywutyrsssusqusd`,
      wall: 4,
      shelf: 3,
      volume: 30,
      page: 43,
      index: 1595,
      offset: 11
   }
   const results = await fetch(url, { method: "POST", body: data })

   res.send(`alright alright alright`)
})

app.post("/v1/", async (req, res) => {
   res.redirect(`/v1/simple`)
})

app.get("/v1/simple", (req, res) => {
   const messages = ["it worked", "life is random", "what if I told you"]
   const message = messages[Math.floor(Math.random() * messages.length)]

   res.json({
      text: message
   })
})

app.get("/v1/:name", (req, res) => {
   const name = req.params.name

   res.json({
      message: `Hello ${name}`
   })
})

module.exports = app
