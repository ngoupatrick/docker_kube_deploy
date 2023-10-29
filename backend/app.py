# app.py
# activate env:
    # C:\Users\ngoun\Documents\dev_ops_all\python_soft\mes_envs\env_test_docker\Scripts\activate
# requirements file:
    # pip install --no-cache-dir -r C:\Users\ngoun\OneDrive\devops\Trash\docker_kube_deploy\backend\requirements_311.txt
# run
    # python C:\Users\ngoun\OneDrive\devops\Trash\docker_kube_deploy\backend\app.py
    
from flask import Flask , request, json, jsonify
from flask_cors import CORS
import logging

app = Flask(__name__)
#cors = CORS(app, resources={r"/api/*": {"origins": "*"}})
CORS(app, resources={r"/*": {"origins": "*"}})
# http://127.0.0.1:8080
# CORS(app, origins="*", allow_headers=[
#    "Content-Type", "Authorization", "Access-Control-Allow-Credentials"],
#    supports_credentials=True)
#logging.getLogger('flask_cors').level = logging.DEBUG

@app.after_request
def after_request(response):
    response.headers.add("Access-Control-Allow-Headers","*"
                         )#"Content-Type,Authorization,x-access-token,X-Custom-Header,true"
    response.headers.add("Access-Control-Allow-Methods",
                         "*")#"GET,PUT,PATCH,POST,DELETE,OPTIONS"
    response.headers.add("Access-Control-Allow-Origin",
                         "*")
    return response

@app.before_request
def before_before():
    pass
    

@app.route('/')
def hello_world():
    return 'Hello, Flask in Docker!'

@app.route("/api/carre", methods = ['POST'])
def carre(): # methode appelé lors de l'appel de la route http://192.168.1.4:3003/api/carre
    # recupere les données envoyés par le client (parametres)
    # données = {"value":nb}
    donnees = json.loads(request.data)
    
    # calcul de carré
    val = int(donnees["value"])*int(donnees["value"])
    
    # retourne un resultat
    return jsonify(val)

if __name__ == '__main__':
    #cors = CORS(app, origins=['http://localhost:3000', 'https://example.com'])
    #cors = CORS(app, resources={r"/api/carre": {"origins": "*"}})
    #CORS(app)
    app.run(host='0.0.0.0', port=5600, debug=True)
