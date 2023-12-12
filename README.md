# aigolem

Prototype for IKEM Hackathon

src/ contains frontend UI - AUrelia framework + webcomponents, REST communication and prompt ui

scripts/ contains python scripts for backend and Jupyter notebooks how the model was trained data processed etc.


## local depoloyment

to execute locally, 
1. create and get your secret OPENAI_API_KEY at https://platform.openai.com/account/api-keys

2. set environment variable OPENAI_API_KEY 

`export OPENAI_API_KEY=...`

3. start aigolem server by:

```bash
cd script
pip install -r requirements.txt
uvicorn aigolemserver:app --reload
```
and access http://localhost:8000 at your browser

## docker deployment

to execute using docker 

1. get OPENAI_API_KEY and set environment variable of OPENAI_API_KEY
`export OPENAI_API_KEY=...`

2.a either use docker scripts

```bash
cd script
./01build.sh
./02start.sh
```
and access http://localhost:8000 at your browser

2.b OR use docker compose

in windows:
```bash
cd aigolem
docker-compose up
```

OR linux:
```
cd aigolem
sudo -E docker-compose up
```
