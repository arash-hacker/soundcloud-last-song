// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
export default async function handler(req, res) {
  let r = await fetch('https://api-v2.soundcloud.com/users/159130288/likes?client_id=8m4K5d2x4mNmUHLhLmsGq9vxE3dDkxCm&limit=24&offset=0&linked_partitioning=1&app_version=1668781563&app_locale=en')
  r = await r.json();
  const randomNumber = Math.floor(Math.random() * 10)
  const song = r.collection[randomNumber].track
  console.log(song)
  res.setHeader('Content-Type', 'image/svg+xml');
  let svg = `<svg xmlns="http://www.w3.org/2000/svg" width="300px" height="446px">
  <style>
        html,
      body {
        padding: 0;
        margin: 0;
        background:'#ff4201';
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
          Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
      }

      a {
        color: inherit;
        text-decoration: none;
      }

      * {
        box-sizing: border-box;
      }

      @media (prefers-color-scheme: dark) {
        html {
          color-scheme: dark;
        }

        body {
          color: white;
          background: black;
        }
      }

      svg {
        font-family: Inter, system-ui, sans-serif;
        font-size: 14px;
        line-height: 21px;
        animation: fade-in ease-in-out 2s;
      }

      @keyframes fade-in {
        from {
          opacity: 0%;
        }

        to {
          opacity: 100%;
        }
      }

      img {
        height: 100%;
        width: 100%;
        border-radius: 8px;
        box-shadow: 0px 4px 20px 4px rgba(0, 0, 0, 0.25);
        /* box-shadow: 0px 4px 80px 20px rgba(0, 0, 0, 0.25); */
        /* box-shadow: 0px 4px 10px 6px rgba(0, 0, 0, 0.25); */
      }

      hr {
        color: white;
      }

      .bar {
        margin-top: 18px;
        margin-bottom: 24px;

        display: flex;
        align-items: center;

        border-radius: 40px;
        height: 2px;
        background-color: rgba(188, 188, 188, 1);
      }

      .meter {
        height: 4px;
        border-radius: 40px;
        background-color: white;

        animation: progressBar 60s linear;
        animation-fill-mode: forwards;
      }

      @keyframes progressBar {
        from {
          width: 0%;
        }

        to {
          width: 100%;
        }
      }

      .background {
        width: calc(100%);
        height: calc(100%);
        fill: rgba(53, 71, 99, 1);
        rx: 8px;
        ry: 8px;
      }

      .container {
        display: flex;
        flex-direction: column;
        padding: 12px 20px 20px 20px;
      }

      .details-column {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        overflow: hidden;
      }

      .fader-right {
        /* right: 0; */
        background: linear-gradient(to left,
            rgba(188, 188, 188, 1),
            rgba(188, 188, 188, 0));
      }

      .title {
        color: white;
        font-size: 20px;
        font-weight: 700;
        letter-spacing: 0.4px;
        white-space: nowrap;
        /* animation: text-scroll infinite linear 20s; */
      }

      .artist {
        color: white;
        margin-top: 4px;
        font-size: 14px;
        font-weight: 600;
        letter-spacing: 0.2px;
        white-space: nowrap;
        /* animation: text-scroll infinite linear 20s; */
        margin-top: 6px;
      }

      .subtitle {
        color: white;
        font-size: 14px;
        font-weight: 500;
        letter-spacing: 0.2px;
        white-space: nowrap;
        /* animation: text-scroll infinite linear 20s; */
        margin-top: 2px;
      }

      @keyframes text-scroll {
        0% {
          transform: translateX(130%);
        }

        33% {
          transform: translateX(0%);
        }

        66% {
          transform: translateX(0%);
        }

        100% {
          transform: translateX(-130%);
        }
      }

      .row {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 14px;
        margin-bottom: 12px;
      }
</style>
        <g>
          <rect class="background" />
          <g>
            <foreignObject width="300" height="446" style="background-color:#ff4201">
              <div xmlns="http://www.w3.org/1999/xhtml" class="container">
                <div class="row">
                  <div class="title right" style=" color: 'white'; letter-spacing: '0.08rem'; font-size: '12px'" >
                    LISTENING NOW ON</div>
                  <img style="width:24px; height:24px" src="https://camo.githubusercontent.com/f17bb345d5343b28594c5c80b31dc6d624da9d7161790db8f339f65f54e929fa/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f6e706d2f73696d706c652d69636f6e7340332e302e312f69636f6e732f736f756e64636c6f75642e737667" />

                </div>

                <div>
                   <img src="${song.artwork_url || song.user.avatar_url}" /> 
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
