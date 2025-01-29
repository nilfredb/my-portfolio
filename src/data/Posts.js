// src/data/blogPosts.js
export const Posts = [
    {
      id: 1,
      title: "Seguridad en Aplicaciones React: Mejores Prácticas",
      excerpt: "Una guía completa sobre cómo implementar medidas de seguridad en tus aplicaciones React y proteger contra vulnerabilidades comunes.",
      content: `
  # Seguridad en Aplicaciones React: Mejores Prácticas
  
  La seguridad en aplicaciones React es fundamental para proteger tanto a los usuarios como a la infraestructura. En este artículo, exploraremos las mejores prácticas y técnicas para asegurar tus aplicaciones React.
  
  ## 1. Vulnerabilidades Comunes
  
  ### XSS (Cross-Site Scripting)
  La prevención de XSS en React comienza con el manejo adecuado de datos:
  
  \`\`\`javascript
  // ❌ Inseguro
  <div dangerouslySetInnerHTML={{ __html: userInput }} />
  
  // ✅ Seguro
  <div>{userInput}</div>
  \`\`\`
  
  ### Inyección de Dependencias
  Mantén tus dependencias actualizadas y verifica vulnerabilidades:
  
  \`\`\`bash
  # Verificar vulnerabilidades
  npm audit
  
  # Actualizar dependencias
  npm update
  \`\`\`
  
  ## 2. Gestión de Estado Segura
  
  Implementa una gestión de estado segura utilizando hooks:
  
  \`\`\`javascript
  const secureStorage = {
    setToken: (token) => {
      sessionStorage.setItem('token', token);
    },
    getToken: () => {
      return sessionStorage.getItem('token');
    },
    clearToken: () => {
      sessionStorage.removeItem('token');
    }
  };
  \`\`\`
  
  ## 3. Autenticación y Autorización
  
  Implementa un sistema robusto de autenticación:
  
  \`\`\`javascript
  function PrivateRoute({ children }) {
    const auth = useAuth();
    
    if (!auth.isAuthenticated) {
      return <Navigate to="/login" />;
    }
    
    return children;
  }
  \`\`\`
  
  ## 4. Manejo de Formularios
  
  Validación y sanitización de datos:
  
  \`\`\`javascript
  const validateInput = (input) => {
    // Eliminar caracteres especiales
    return input.replace(/[<>]/g, '');
  };
  
  function SecureForm() {
    const handleSubmit = (e) => {
      e.preventDefault();
      const sanitizedData = validateInput(e.target.value);
      // Procesar datos seguros
    };
    
    return (
      <form onSubmit={handleSubmit}>
        {/* ... */}
      </form>
    );
  }
  \`\`\`
  
  ## 5. Headers de Seguridad
  
  Configura los headers de seguridad apropiados:
  
  \`\`\`javascript
  // En tu servidor
  app.use(helmet({
    contentSecurityPolicy: {
      directives: {
        defaultSrc: ["'self'"],
        scriptSrc: ["'self'", "'unsafe-inline'"],
        styleSrc: ["'self'", "'unsafe-inline'"],
        imgSrc: ["'self'", "data:", "https:"],
      },
    },
  }));
  \`\`\`
  
  ## Conclusiones
  
  La seguridad debe ser una prioridad desde el inicio del desarrollo. Implementa estas prácticas de manera consistente y mantente actualizado sobre nuevas vulnerabilidades y soluciones.
      `,
      date: "22 Enero, 2025",
      author: "Developer",
      category: "Seguridad",
      tags: ["React", "Seguridad", "JavaScript"],
      readTime: "10 min"
    },
    {
      id: 2,
      title: "OSINT en 2025: Nuevas Herramientas y Técnicas",
      image: "../img/wsl.webp",
      excerpt: "Descubre las últimas herramientas y metodologías para investigación OSINT en el panorama actual de la ciberseguridad.",
      content: `
  # OSINT en 2025: Nuevas Herramientas y Técnicas
  
  El panorama del OSINT ha evolucionado significativamente. Veamos las herramientas y técnicas más efectivas para la investigación moderna.
  
  ## 1. Herramientas Automatizadas
  
  ### Recopilación de Datos
  \`\`\`python
  import osinttools
  
  def gather_intel(target):
      # Configuración inicial
      config = {
          'apis': ['social', 'web', 'dark'],
          'depth': 'deep',
          'timeout': 300
      }
      
      # Iniciar recopilación
      results = osinttools.gather(target, config)
      return process_results(results)
  
  def process_results(data):
      # Filtrar información relevante
      return {
          'social_presence': data.social_networks,
          'email_accounts': data.emails,
          'related_domains': data.domains
      }
  \`\`\`
  
  ## 2. Análisis de Redes Sociales
  
  ### Script de Análisis
  \`\`\`python
  from social_analyzer import SocialAnalyzer
  
  def analyze_social_presence(username):
      analyzer = SocialAnalyzer()
      platforms = analyzer.find_accounts(username)
      
      for platform in platforms:
          details = analyzer.get_details(platform)
          store_findings(details)
  \`\`\`
  
  ## 3. Metodologías Actualizadas
  
  ### Proceso de Investigación
  1. Reconocimiento Pasivo
     - Búsqueda en caché
     - Análisis de metadatos
     - Monitoreo de cambios
  
  2. Verificación de Datos
     - Cruce de información
     - Validación de fuentes
     - Análisis temporal
  
  3. Documentación
     - Registro de hallazgos
     - Cadena de custodia
     - Reportes detallados
  
  ## 4. Consideraciones Éticas
  
  ### Marco de Trabajo Ético
  \`\`\`python
  class OSINTEthics:
      def __init__(self):
          self.boundaries = {
              'personal_info': False,
              'private_data': False,
              'sensitive_content': False
          }
      
      def validate_search(self, query):
          return all(
              not self.is_sensitive(param)
              for param in query.split()
          )
  \`\`\`
  
  ## Conclusiones
  
  El OSINT moderno requiere un equilibrio entre eficiencia y ética. Las herramientas automatizadas son poderosas, pero deben usarse responsablemente.
      `,
      date: "20 Enero, 2025",
      author: "Investigador OSINT",
      category: "OSINT",
      tags: ["OSINT", "Ciberseguridad", "Investigación"],
      readTime: "8 min"
    },
    {
      id: 3,
      title: "WSL para Pentesting: Configuración Avanzada",
      excerpt: "Aprende a configurar WSL de manera óptima para realizar pruebas de penetración y auditorías de seguridad.",
      content: `
  # WSL para Pentesting: Configuración Avanzada
  
  Windows Subsystem for Linux se ha convertido en una herramienta esencial para pentesters. Veamos cómo configurarlo de manera óptima.
  
  ## 1. Instalación y Configuración Base
  
  ### Instalación de WSL
  \`\`\`bash
  # Instalar WSL con Kali Linux
  wsl --install -d kali-linux
  
  # Actualizar el sistema
  sudo apt update && sudo apt upgrade -y
  \`\`\`
  
  ### Configuración de Red
  \`\`\`bash
  # Habilitar modo promiscuo
  sudo ip link set eth0 promisc on
  
  # Configurar DNS
  echo "nameserver 8.8.8.8" | sudo tee /etc/resolv.conf
  \`\`\`
  
  ## 2. Herramientas Esenciales
  
  ### Script de Instalación Automatizada
  \`\`\`python
  #!/usr/bin/env python3
  
  tools = {
      'reconnaissance': [
          'nmap',
          'masscan',
          'nikto'
      ],
      'exploitation': [
          'metasploit-framework',
          'exploit-db',
          'sqlmap'
      ],
      'wireless': [
          'aircrack-ng',
          'kismet',
          'wifite'
      ]
  }
  
  def install_tools():
      for category, packages in tools.items():
          print(f"Installing {category} tools...")
          for package in packages:
              os.system(f"sudo apt install -y {package}")
  
  if __name__ == "__main__":
      install_tools()
  \`\`\`
  
  ## 3. Optimización de Rendimiento
  
  ### Configuración de Memoria
  \`\`\`bash
  # Ajustar límites de memoria
  echo "vm.swappiness=10" | sudo tee -a /etc/sysctl.conf
  echo "vm.vfs_cache_pressure=50" | sudo tee -a /etc/sysctl.conf
  \`\`\`
  
  ### Script de Optimización
  \`\`\`python
  def optimize_wsl():
      config = {
          'memory_limit': '8GB',
          'processors': 4,
          'swap': '2GB'
      }
      
      with open('.wslconfig', 'w') as f:
          for key, value in config.items():
              f.write(f"{key}={value}\\n")
  \`\`\`
  
  ## 4. Integración con Windows
  
  ### Acceso a Recursos Windows
  \`\`\`bash
  # Montar unidad Windows
  sudo mount -t drvfs D: /mnt/d
  
  # Configurar X Server
  export DISPLAY=:0
  \`\`\`
  
  ## Conclusiones
  
  WSL proporciona un entorno potente para pentesting cuando está correctamente configurado. Mantén actualizado tu sistema y herramientas.
      `,
      date: "18 Enero, 2025",
      author: "Pentester",
      category: "Pentesting",
      tags: ["WSL", "Linux", "Pentesting"],
      readTime: "12 min"
    }
  ];
  
  export default Posts;