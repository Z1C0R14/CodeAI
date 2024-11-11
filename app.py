import requests

# Substitua pelo seu token
token = "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"

# URL do modelo na Hugging Face
url = "https://api-inference.huggingface.co/models/isacr217/Artples-LAI-ImageGeneration-vSDXL-2"

# O cabeçalho de autorização (usando o token)
headers = {
    "Authorization": f"Bearer {token}"
}

# O prompt para gerar a imagem
prompt = "Uma paisagem de montanha"

# Corpo da requisição (os parâmetros para a geração da imagem)
payload = {
    "inputs": prompt,
    "options": {
        "use_cache": False  # Opção para não usar cache, se necessário
    }
}

# Fazendo a requisição POST
response = requests.post(url, headers=headers, json=payload)

# Verificando a resposta
if response.status_code == 200:
    # A API retorna uma URL da imagem gerada
    result = response.json()
    print("Imagem gerada com sucesso!")
    print("URL da Imagem:", result.get("url", "Imagem não encontrada"))
else:
    print(f"Erro ao gerar a imagem: {response.status_code}")
    print(response.text)
