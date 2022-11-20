const path = require('path')
export default async function handler(req, res) {
  let r = await fetch('https://api-v2.soundcloud.com/users/159130288/likes?client_id=8m4K5d2x4mNmUHLhLmsGq9vxE3dDkxCm&limit=24&offset=0&linked_partitioning=1&app_version=1668781563&app_locale=en')
  r = await r.json();
  const randomNumber = Math.floor(Math.random() * 10)
  const song = r.collection[randomNumber].track
  const picUrl = song.artwork_url || song.user.avatar_url
  const b64 = (await (await fetch(picUrl)).buffer()).toString('base64')
  const pic = `data:image/${path.extname(picUrl).substring(1)};base64,` + b64
  res.setHeader('Content-Type', 'image/svg+xml');
  let svg = `<svg xmlns="http://www.w3.org/2000/svg" width="300px" height="446px">
  <style>html,body{padding:0;margin:0;background:'#ff4201';overflow:hidden;font-family:-apple-system,BlinkMacSystemFont,SegoeUI,Roboto,Oxygen,Ubuntu,Cantarell,FiraSans,DroidSans,HelveticaNeue,sans-serif;}a{color:inherit;text-decoration:none;}*{box-sizing:border-box;}@media(prefers-color-scheme:dark){html{color-scheme:dark;}body{color:white;background:black;}}svg{font-family:Inter,system-ui,sans-serif;font-size:14px;line-height:21px;animation:fade-inease-in-out2s;}@keyframesfade-in{from{opacity:0%;}to{opacity:100%;}}img{height:100%;width:100%;border-radius:8px;box-shadow:0px4px20px4pxrgba(0,0,0,0.25);/*box-shadow:0px4px80px20pxrgba(0,0,0,0.25);*//*box-shadow:0px4px10px6pxrgba(0,0,0,0.25);*/}hr{color:white;}.bar{margin-top:18px;margin-bottom:24px;display:flex;align-items:center;border-radius:40px;height:2px;background-color:rgba(188,188,188,1);}.meter{height:4px;border-radius:40px;background-color:white;animation:progressBar60slinear;animation-fill-mode:forwards;}@keyframesprogressBar{from{width:0%;}to{width:100%;}}.background{width:calc(100%);height:calc(100%);fill:rgba(53,71,99,1);rx:8px;ry:8px;}.container{display:flex;flex-direction:column;padding:12px20px20px20px;}.details-column{display:flex;flex-direction:column;justify-content:space-between;overflow:hidden;}.fader-right{/*right:0;*/background:linear-gradient(toleft,rgba(188,188,188,1),rgba(188,188,188,0));}.title{color:white;font-size:20px;font-weight:700;letter-spacing:0.4px;white-space:nowrap;/*animation:text-scrollinfinitelinear20s;*/}.artist{color:white;margin-top:4px;font-size:14px;font-weight:600;letter-spacing:0.2px;white-space:nowrap;/*animation:text-scrollinfinitelinear20s;*/margin-top:6px;}.subtitle{color:white;font-size:14px;font-weight:500;letter-spacing:0.2px;white-space:nowrap;/*animation:text-scrollinfinitelinear20s;*/margin-top:2px;}@keyframestext-scroll{0%{transform:translateX(130%);}33%{transform:translateX(0%);}66%{transform:translateX(0%);}100%{transform:translateX(-130%);}}.row{display:flex;flex-direction:row;justify-content:center;align-items:center;gap:14px;margin-bottom:12px;}</style>
        <g>
          <rect class="background" />
          <g>
            <foreignObject width="300" height="446" style="background-color:#ff4201;border-radius:20px">
              <div xmlns="http://www.w3.org/1999/xhtml" class="container">
                <div class="row">
                <div class="title right" style=" color: 'white'; letter-spacing: '0.08rem'; font-size: '12px'" >LISTENING NOW ON</div>
                <img style="width:24px; height:24px" src="data:image/png;base64,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" /> 
                </div>
                <div>
                   <img src="${pic}" /> 
                </div>

                <div class="bar">
                  <div class="meter"></div>
                </div>

                <div class="details-column">
                   <marqueue class="title right">${song.title}</marqueue>
                  <marqueue class="artist">${song.user.full_name}</marqueue>
                </div>
              </div>
            </foreignObject>
          </g>
        </g>
      </svg >`

  res.status(200).send(svg);
}
