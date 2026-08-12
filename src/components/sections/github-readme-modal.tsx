import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Copy, Check, Download, Github, Sparkles, FileText, Code2, Terminal } from "lucide-react";
import { toast } from "sonner";

type Props = {
  open: boolean;
  onClose: () => void;
};

export const GITHUB_PROFILE_README_MARKDOWN = `# 👋 Olá! Eu sou Reinaldo Barreto

### 🚀 Desenvolvedor Java / Backend Software Engineer

> *"A pausa foi criada para que o coletor de lixo (Garbage Collector) trabalhe sem distrações — mas do Java 8 ao Java 21 com ZGC e Threads Virtuais, a alta performance nunca para."*

---

### 🛠️ Stack Principal & Ecossistema

[![Java 21](https://img.shields.io/badge/Java-21%20%2F%2017%20%2F%208%2B-007396?style=for-the-badge&logo=openjdk&logoColor=white)](https://java.com)
[![Spring Boot 3](https://img.shields.io/badge/Spring_Boot-3.x-6DB33F?style=for-the-badge&logo=springboot&logoColor=white)](https://spring.io/projects/spring-boot)
[![Quarkus](https://img.shields.io/badge/Quarkus-GraalVM-4695EB?style=for-the-badge&logo=quarkus&logoColor=white)](https://quarkus.io)
[![Kotlin](https://img.shields.io/badge/Kotlin-Android_Nativo_%2B_Web-7F52FF?style=for-the-badge&logo=kotlin&logoColor=white)](https://kotlinlang.org)
[![Golang](https://img.shields.io/badge/Go-Golang-00ADD8?style=for-the-badge&logo=go&logoColor=white)](https://go.dev)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-DB-4169E1?style=for-the-badge&logo=postgresql&logoColor=white)](https://postgresql.org)
[![Docker](https://img.shields.io/badge/Docker-Containers-2496ED?style=for-the-badge&logo=docker&logoColor=white)](https://docker.com)
[![Flutter](https://img.shields.io/badge/Flutter-Mobile-02569B?style=for-the-badge&logo=flutter&logoColor=white)](https://flutter.dev)

---

### 📐 Padrões de Arquitetura & Boas Práticas

- **Princípios SOLID & Clean Code**: Código legível, altamente testável e desacoplado.
- **Clean Architecture & Hexagonal (Ports and Adapters)**: Isolamento do domínio de detalhes de infraestrutura.
- **Domain-Driven Design (DDD)**: Modelagem orientada ao negócio e linguagens ubíquas.
- **TDD (Test-Driven Development)**: Cobertura automatizada com JUnit 5, Mockito, MockK, AssertJ e Testcontainers.
- **Design Patterns (GoF)**: Singleton, Factory, Strategy, Builder, Observer, Repository, Service Layer.
- **Modernização de Legados**: Transição segura de sistemas legados Java (JSP, Servlets, Apache Struts, Java EE) para Spring Boot 3 e Quarkus.

---

### 🔭 Experiência Profissional Destacada

- **PRODEB (Companhia de Processamento de Dados da Bahia)**:
  - Desenvolvimento e evolução de APIs REST enterprise para a **Secretaria da Fazenda (SEFAZ-BA)** e órgãos governamentais do Estado da Bahia.
  - Banco de dados relacional com PostgreSQL e Oracle DB, arquitetura reativa com Vue 3 no front-end.
- **SSP-BA (Secretaria de Segurança Pública da Bahia)**:
  - Desenvolvimento do **Sistema Cartão do Policial**, gerenciando identidades e registros operacionais das forças de segurança do Estado.
- **EDZA / Sistemas Governamentais e ERPs**:
  - Manutenção e evolução de ERPs Municipais com cobertura completa nos módulos **Tributário, RH, Finanças, Saúde, Educação e Nota Fiscal Eletrônica (NF-e)**.

---

### 💻 Projetos em Destaque

1. **[Quarkus Reactive Cloud API](https://github.com/reinaldobarreto31/quarkus-reactive-api)**
   - *Java 21 · Quarkus · Mutiny · Panache · GraalVM Native · PostgreSQL*
   - API reativa de altíssima performance compilada nativamente com GraalVM para startup em sub-segundos.

2. **[Golang High-Performance Microservice](https://github.com/reinaldobarreto31/golang-microservice)**
   - *Go (Golang) · Gin/Fiber · GORM · PostgreSQL · Goroutines · Docker*
   - Microserviço em Go para altíssima concorrência com Goroutines e imagem Docker distroless de 20MB.

3. **[Spring Boot Microservices Architecture](https://github.com/reinaldobarreto31/spring-microservices)**
   - *Java 17 · Spring Boot 3 · Spring Cloud · Apache Kafka · Eureka · Keycloak*
   - Ecossistema de microsserviços com Service Discovery, API Gateway e mensageria assíncrona.

4. **[Kotlin Android Native App](https://github.com/reinaldobarreto31/kotlin-android-app)**
   - *Kotlin · Jetpack Compose · MVVM · Room · Retrofit · Coroutines · Flow*
   - Aplicativo Android nativo moderno com Jetpack Compose e Clean Architecture.

5. **[PDF Compressor Web & Script](https://github.com/reinaldobarreto31/PDF-Compressor)**
   - *Python · Ghostscript · React 18 · TypeScript · Web Client-Side*
   - Compressor de PDF inteligente com presets para Governo BR (2MB), Empresas (5MB) e e-mail.

---

### 📊 Estatísticas do GitHub

<p align="center">
  <img height="160" src="https://github-readme-stats.vercel.app/api?username=reinaldobarreto31&show_icons=true&theme=dracula&count_private=true" alt="Estatísticas de Reinaldo Barreto" />
  <img height="160" src="https://github-readme-stats.vercel.app/api/top-langs/?username=reinaldobarreto31&layout=compact&theme=dracula&hide=html,css" alt="Linguagens mais usadas por Reinaldo Barreto" />
</p>

---

### 📬 Conecte-se comigo

- 💼 **LinkedIn**: [reinaldo-barreto-2a4ba2116](https://linkedin.com/in/reinaldo-barreto-2a4ba2116)
- 🌐 **Portfólio Web**: [reinaldobarreto31.github.io](https://reinaldobarreto31.github.io)
- ✉️ **E-mail**: [reinaldobarretosilva@gmail.com](mailto:reinaldobarretosilva@gmail.com)
`;

export function GithubReadmeModal({ open, onClose }: Props) {
  const [copied, setCopied] = useState(false);

  if (!open) return null;

  const handleCopy = () => {
    navigator.clipboard.writeText(GITHUB_PROFILE_README_MARKDOWN);
    setCopied(true);
    toast.success("Markdown do README do GitHub copiado para a área de transferência!");
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    const blob = new Blob([GITHUB_PROFILE_README_MARKDOWN], { type: "text/markdown;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "README.md";
    a.click();
    URL.revokeObjectURL(url);
    toast.success("Arquivo README.md baixado com sucesso!");
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          className="relative w-full max-w-4xl max-h-[90vh] flex flex-col rounded-2xl bg-[#1e1f29] border border-[#44475a] text-[#f8f8f2] shadow-2xl overflow-hidden"
        >
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-[#44475a] bg-[#181921]">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#6db33f]/15 border border-[#6db33f]/30 flex items-center justify-center text-[#6db33f]">
                <Github size={20} />
              </div>
              <div>
                <h3 className="font-bold text-base text-white flex items-center gap-2">
                  Gerador do README.md do Perfil GitHub
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[#6db33f]/20 text-[#50fa7b] border border-[#50fa7b]/30">
                    reinaldobarreto31/reinaldobarreto31
                  </span>
                </h3>
                <p className="text-xs text-[#8be9fd] font-mono">
                  Copie e cole diretamente no seu repositório especial de perfil do GitHub
                </p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-lg text-[#6272a4] hover:text-white hover:bg-[#282a36] transition-colors"
            >
              <X size={20} />
            </button>
          </div>

          {/* Action Bar */}
          <div className="px-6 py-3 bg-[#282a36] border-b border-[#44475a] flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2 text-xs font-mono text-[#f1fa8c]">
              <Sparkles size={14} className="text-[#50fa7b]" />
              <span>Inclui Java Mantra, Golang, Kotlin, Spring Boot 3 e boas práticas SOLID / Clean Arch!</span>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={handleCopy}
                className="px-4 py-2 rounded-lg bg-[#50fa7b] hover:bg-[#50fa7b]/90 text-[#191a21] font-bold text-xs flex items-center gap-1.5 transition-all shadow-md"
              >
                {copied ? <Check size={15} /> : <Copy size={15} />}
                {copied ? "Copiado!" : "Copiar Markdown"}
              </button>
              <button
                onClick={handleDownload}
                className="px-4 py-2 rounded-lg bg-[#44475a] hover:bg-[#6272a4] text-white font-semibold text-xs flex items-center gap-1.5 transition-all border border-white/10"
              >
                <Download size={15} />
                Baixar README.md
              </button>
            </div>
          </div>

          {/* Markdown Content Viewer */}
          <div className="p-6 overflow-y-auto flex-1 font-mono text-xs leading-relaxed bg-[#191a21] text-[#f8f8f2] space-y-2 select-text">
            <pre className="whitespace-pre-wrap font-mono p-4 rounded-xl bg-[#282a36] border border-[#44475a] text-[#8be9fd] overflow-x-auto shadow-inner">
              {GITHUB_PROFILE_README_MARKDOWN}
            </pre>
          </div>

          {/* Footer Info */}
          <div className="px-6 py-3 bg-[#181921] border-t border-[#44475a] flex items-center justify-between text-[11px] font-mono text-[#6272a4]">
            <span>Repositório Alvo: https://github.com/reinaldobarreto31/reinaldobarreto31</span>
            <button
              onClick={onClose}
              className="px-3 py-1 rounded bg-[#282a36] hover:bg-[#44475a] text-[#f8f8f2] transition-colors"
            >
              Fechar
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
