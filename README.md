# 👕 T-Shirt E-commerce

Um projeto de e-commerce focado na venda de roupas e acessórios, desenvolvido com uma interface reativa e moderna.

## 📌 Especificações do Projeto
- [x] Venda de camisetas
- [x] Venda de moletons
- [x] Expansão do catálogo: camisetas estampadas, camisetas básicas e acessórios
- [x] Exibição detalhada de informações dos produtos
- [x] Padronização de cores de identificação
- [x] Favicon implementado

---

## 🖼️ Telas do Projeto

<p align="center" style="display: flex; flex-wrap: wrap; align-items: center; justify-content: center; gap: 10px;">
  <img alt="versão 1.1 do projeto" title="#t-shirt" src="./.github/tela-1.jpg" width="18%">
  <img alt="versão 1.2 do projeto" title="#t-shirt" src="./.github/tela-2.jpg" width="18%">
  <img alt="versão 1.3 do projeto" title="#t-shirt" src="./.github/tela-3.jpg" width="18%">
  <img alt="versão 1.4 do projeto" title="#t-shirt" src="./.github/tela-4.jpg" width="18%">
  <img alt="versão 1.4 do projeto" title="#t-shirt" src="./.github/tela-5.jpg" width="18%">
</p>

---

## ⚙️ Funcionalidades

### Catálogo e Produtos
- [x] Utilizar uma API ou JSON para os dados (objetos criados em `store.js`)
- [x] Catálogo geral de produtos
- [ ] Catálogo de produtos com filtro
- [ ] Catálogo de produtos com paginação
- [x] Página de detalhes do produto
- [ ] Página de produto com seleção de tamanho
- [ ] Página de produto com ação de compra

### Carrinho e Checkout
- [x] Página do carrinho funcional
- [ ] Página de carrinho com alteração de quantidade
- [ ] Página de carrinho com adição de cupom de desconto

---

## 💻 Tecnologias Utilizadas

- [ ] **Laravel** (Backend / API - Planejado)
- [x] **Vue.js** (Interface / Frontend)
- [x] **Consumo de API** (Integração de dados)
- [x] **GitHub** (Versionamento do repositório)

---

## ✅ Revisão e Melhorias Concluídas

- [x] **Página de detalhes de produto:** Estilizada com a paleta de cores oficial.
- [x] **Modal de informações:** Cores ajustadas e redimensionamento dinâmico conforme a quantidade de texto.
- [x] **Menu:** Aperfeiçoamento do design e inclusão da logo da loja.
- [x] **Preços (Price):** Correção no formato de exibição da moeda.

---

## 🔀 Gestão do Projeto e Branches

O fluxo de trabalho utiliza branches específicas para organizar as entregas e garantir testes antes de ir para produção:

*   `main` ➔ Produção (Código estável).
*   `developer-testing` ➔ Branch de homologação (recebe resoluções, trata e testa as tarefas antes do merge com a main).

**Branches de Features (Atuais/Concluídas):**
*   `feat/identidade-visual`
*   `feat/api-json`
*   `feat/details-product`
*   `feat/modal-design`
*   `feat/menu-design`
*   `feat/price`

---

## 🚀 Como Executar o Projeto (Build)

1. Clone este repositório em sua máquina.
2. Na raiz do projeto (`/t-shirt`), instale as dependências:
```bash
npm install
```
3. Execute o ambiente de desenvolvimento:
```bash
npm run start
```

---

## 📋 TO-DO List (Próximos Passos & Backlog)

### 📱 UI/UX & Navegação
- [ ] **1. Menu Fixo (Sticky Header):** Travar a barra de navegação no topo da tela. Reduz o atrito na navegação, facilitando acesso rápido ao carrinho.
- [ ] **2. Sinalização de Rota Ativa:** Destacar visualmente qual categoria o usuário está visualizando para melhorar a localização.
- [ ] **3. Botão "Voltar ao Topo":** Botão flutuante para facilitar o retorno ao menu e filtros em catálogos longos.
- [ ] **4. Persistir o Conteúdo:** Garantir que o estado da interface não se perca durante a navegação.

### 🛒 Conversão & Carrinho
- [ ] **5. Seleção de Tamanhos no Produto:** Exigir escolha do tamanho (P, M, G, GG) antes de adicionar ao carrinho (regra inegociável para vestuário).
- [ ] **6. Persistência de Carrinho (Local Storage):** Salvar produtos na memória do navegador para evitar abandono de pedido ao recarregar a página (F5).
- [ ] **7. Gestão de Quantidade no Checkout:** Botões de `+` e `-` para alterar quantidades rapidamente na etapa final.
- [ ] **8. Cupons de Desconto:** Campo para aplicar códigos promocionais no checkout.

### 📦 Catálogo & Arquitetura
- [ ] **9. Filtros Dinâmicos:** Opções para filtrar produtos por tipo, preço ou cor, encurtando a jornada de busca.
- [ ] **10. Integração com API Backend (Laravel):** Substituir dados estáticos (`store.js`) por consumo real de um banco de dados.

---

## 📚 Referências

*   [Vue.js Webpack Guide](http://vuejs-templates.github.io/webpack/)
*   [Docs for vue-loader](http://vuejs.github.io/vue-loader)
*   [Made With Vue.js - Vue Cart](https://madewithvuejs.com/vue-cart)
*   [GitHub Original Reference - crisgon/vue-cart](https://github.com/crisgon/vue-cart)