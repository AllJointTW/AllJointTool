# Self Hosted Ngrok

> The Self Hosted Ngrok Be Used For AllJointNext

## Usage (Client)

1. Download the [ngrok v1 (MacOS)](./ngrok-client-release-build-go1.14.3.darwin-amd64.zip) client. **Or you can build the client yourself (see the Build the client section)**
2. Create Config (config.yaml) for personal use.

```sh
export DOMAIN='Set Your Domain Here'
eval "echo \"$(cat ./template.yaml)\"" > config.yaml
# Or move the config file to ~/.ngrok for global setting
# mv config.yaml ~/.ngrok
```

3. Ship your port

```sh
./ngrok -config=config.yaml start api # start-all
# Or
# ./ngrok -config=config.yaml start 3000
```

4. Finished
   ![ScreenShot1](./screenshot1.png)

## Installation (Server)

### Debian 10 on GCP Compute Engine

1. update

```sh
sudo apt update
sudo apt upgrade
sudo apt autoremove
```

2. install tool

```sh
sudo apt install make git certbot nginx ufw
```

3. setup the ssl

```sh
export DOMAIN='Set Your Domain Here'
certbot -d ngrok.${DOMAIN} -d *.ngrok.${DOMAIN} --manual --preferred-challenges dns certonly
```

**Certbot will ask you add the DNS TXT record**

```sh
Please deploy a DNS TXT record under the name
_acme-challenge.ngrok.domain.com with the following value:

767drhmQL3vX6bu8YZlgy0eKNBlCny8yrjF1lSafndc

Once this is deployed,
Press ENTER to continue
```

![ScreenShot2](./screenshot2.png)

4. setup the domain

**Server IP is your external ip**

![ScreenShot3](./screenshot3.png)

5. setup the firewall for nginx

```sh
# list the app
sudo ufw app list

# allow nginx
sudo ufw allow 'Nginx Full'
```

**check**

```sh
sudo ufw status
```

6. get current ip and add the new ip

```sh
# check your network interface controller and internal ip
ip a
```

![ScreenShot4](./screenshot4.png)

**my internal ip is 10.140.0.5, and my network interface controller is ens4**

```sh
# add the new ip
ip addr add 172.140.0.5 dev ens4
```

7. setup nginx

**10.140.0.5 is my internal ip**
**172.140.0.5 is my new ip**

```sh
# remove useless
rm /etc/nginx/sites-enabled/default

# add the config
bash -c "echo 'server {
  listen 10.140.0.5:80;
  listen 10.140.0.5:443;
  server_name ngrok.${DOMAIN} *.ngrok.${DOMAIN}

  location / {
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header Host $host;
    proxy_redirect off;
    proxy_pass http://172.140.0.5:80;
  }

  ssl on;
  ssl_certificate /etc/letsencrypt/live/ngrok.${DOMAIN}/fullchain.pem;
  ssl_certificate_key /etc/letsencrypt/live/ngrok.${DOMAIN}/privkey.pem;
}' > /etc/nginx/sites-enabled/ngrokd.conf"

# reload service
sudo systemctl reload nginx
sudo systemctl restart nginx

# enable boot
sudo systemctl enable nginx
```

8. install go

```sh
curl https://dl.google.com/go/go1.14.3.linux-amd64.tar.gz --output go1.14.3.linux-amd64.tar.gz
sudo tar -C /usr/local -xzf go1.14.3.linux-amd64.tar.gz
rm go1.14.3.linux-amd64.tar.gz
echo 'export PATH=$PATH:/usr/local/go/bin' >> $HOME/.profile
source $HOME/.profile
```

**check**

```sh
go -v
```

9. build server

```sh
git clone https://github.com/inconshreveable/ngrok.git
cd ngrok
make release-server
mv bin/ngrokd /usr/local/bin
```

10. setup the service

**172.140.0.5 is my new ip**

```sh
sudo echo \
'[Unit]
Description=ngrokd service
After=network.target
StartLimitIntervalSec=0
[Service]
Type=simple
Restart=always
RestartSec=1
User=root
ExecStart=/usr/local/bin/ngrokd -httpAddr=172.140.0.5:80 -httpsAddr=172.140.0.5:443 -tlsKey="/etc/letsencrypt/live/${DOMAIN}/privkey.pem" -tlsCrt="/etc/letsencrypt/live/${DOMAIN}/fullchain.pem" -domain="${DOMAIN}"
[Install]
WantedBy=multi-user.target /etc/systemd/system/ngrokd.service' > /etc/systemd/system/ngrokd.service

systemctl start ngrokd
systemctl enable ngrokd
```

**check**

```sh
systemctl status ngrokd
```

8. setup Firewall

- name: allow-my-office
- direction: input
- actionType: allow
- ip range: your ip range
- tcp: 0-65535
- udp: 0-65535

9. finished

## Build the client

**install the go, git and make first**

```sh
git clone https://github.com/inconshreveable/ngrok.git
cd ngrok
make release-client
mv bin/ngrok /usr/local/bin
```

**check**

```sh
ngrok 80
```
