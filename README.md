### Criando projeto com typescript 

iniciando o projeto com typescript

Adicionando typescript como dependência de ambiente
```$ yarn add -D @types/express```

Descrição: ```yarn -D @types/nome da depedência```

Criando arquivo de configuração do typescript
```$ yarn tsc --init```

Descrição: É nescessario ter um arquivo de configuração para compilar com typescript

Compilando typescript para javascript
```$ yarn tsc src/index.ts```

Descrição: ```yarn tsc src/nome do arquivo a ser compilado```

Configurando a saida dos arquivos compilados
  1 - Acessa o arquivos: ```tsconfig.json``` e 
  2 - Descomenta a linha: ```"outDir": "./"```
  3 - Adicionar o diretório de saida: ```"outDir": "./dist"```
