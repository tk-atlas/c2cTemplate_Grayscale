from flask import Flask, render_template, jsonify
from random import shuffle


app = Flask(__name__)

@app.route('/', methods=['GET'])
def main():
    return render_template("index.html")

@app.route('/api/transformers.json', methods=['GET'])
def api_transformers():
    transformers = [
        {"name": "Frenzy", "height": "3'", "image_url": "https://upload.wikimedia.org/wikipedia/en/6/69/Frenzy-art.jpg"},
        {"name": "Jazz", "height": "15'", "image_url": "https://upload.wikimedia.org/wikipedia/en/3/37/Jazz-animated.jpg"},
        {"name": "Bumblebee", "height": "16'", "image_url": "https://upload.wikimedia.org/wikipedia/en/3/37/BumblebeeHIRES.jpg"},
        {"name": "Barricade", "height": "16'", "image_url": "https://upload.wikimedia.org/wikipedia/en/d/de/Barricade-g1toy.jpg"},
        {"name": "Ratchet", "height": "20'", "image_url": "https://upload.wikimedia.org/wikipedia/en/3/30/Ratchet_%28Transformers_-_Generation_1%29.jpg"},
        {"name": "Ironhide", "height": "22'", "image_url": "https://upload.wikimedia.org/wikipedia/en/5/56/Ironhide-universeclassictoy.jpg"},
        {"name": "Optimus Prime", "height": "28'", "image_url": "https://upload.wikimedia.org/wikipedia/en/0/03/Optimusprime-armada.png"},
        {"name": "Starscream", "height": "31'", "image_url": "https://upload.wikimedia.org/wikipedia/en/5/59/Starscream_%28Transformers%29.jpg"},
        {"name": "Blackout", "height": "33'", "image_url": "https://upload.wikimedia.org/wikipedia/en/0/05/Blackout-energontoy.jpg"},
        {"name": "Megatron", "height": "35'", "image_url": "https://upload.wikimedia.org/wikipedia/en/7/7f/Megatron.jpg"}
    ]

    shuffle(transformers)

    return jsonify(transformers)  # <-- Python object (list of dictionaries) converted to JSON

if __name__ == '__main__':
    app.run()
