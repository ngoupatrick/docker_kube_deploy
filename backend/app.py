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
CORS(app, resources={r"/*": {"origins": "*"}})

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
def carre(): 
    # recupere les données envoyés par le client (parametres)
    # données = {"value":nb}
    donnees = json.loads(request.data)
    
    # calcul de carré
    val = int(donnees["value"])*int(donnees["value"])
    
    # retourne un resultat
    return jsonify(val)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5600, debug=True)
