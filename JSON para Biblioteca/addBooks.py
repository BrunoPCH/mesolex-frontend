import json
import sys
import os
option = "S"
paramList=sys.argv
def formatterArray(ObjString):
    listFormated=ObjString.split(",")
    return listFormated
def makeLangObject(ObjString):
    tempJsonObj=[]
    listFormated=ObjString.split(",")
    for lang in listFormated:
        tempJsonObj.append({"name":lang})
    return tempJsonObj
try:
    nameFile = paramList[1]
    library = json.loads(open(nameFile).read())
    while option=="S":
        title = input("Ingrese el titulo")
        author = formatterArray(input("Ingresa los autores separados por comas\n"))#arr
        community=input("Ingresa las comunidades separadas por comas\n")
        gtlog=input("Ingresa gtlog\n")
        Gpo_lang=input("Ingresa grupo de lenguas\n")
        year=input("Ingresa año\n")
        source=input("Ingresa URL\n")
        extra_es=input("Ingresa texto extra español\n")
        extra_en=input("Ingresa texto extra ingles\n")
        terminal_lang_es=makeLangObject(input("Ingresa las lenguas terminales en español separadas por comas\n"))#arr
        terminal_lang_en=makeLangObject(input("Ingresa las lenguas terminales en ingles separadas por comas\n"))
        keywords_es=formatterArray(input("Ingresa las keywords en español separadas por comas\n"))#arr
        keywords_en=formatterArray(input("Ingresa las keywords en ingles separadas por comas\n"))#arr
        library.append({
            "title": title,
            "authors": author,
            "community":community,
            "gtolog":gtlog,
            "Gpo_lang":Gpo_lang,
            "year": year,
            "source":source,
            "extra_es": extra_es,
            "extra_en": extra_en,
            "terminal_lang_es":terminal_lang_es ,
            "terminal_lang_en": terminal_lang_en,
            "keywords_es":keywords_es,
            "keywords_en":keywords_en 

        })
        print(f'Libro agregado!!!:\n{library}')
        option = input("deseas agregar un nuevo elemento S/N!").capitalize()
except:
    print(f'Error')

try:
    os.system(f'touch new{nameFile}')
    with open(f'new{nameFile}','w') as json_file:
        json.dump(library,json_file,ensure_ascii=False)
except:
    print("error al crear el archivo")