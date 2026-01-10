<a id="readme-top"></a>

<!-- PROJECT SHIELDS -->
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/akshay-knows/dns-security-notifier">
    <img src="icons/icon128.png" alt="Logo" width="80" height="80">
  </a>

<h3 align="center">DNS Security Notifier</h3>

  <p align="center">
    A Chrome extension that provides real-time visual notifications about DNS security status
    <br />
    <a href="https://github.com/akshay-knows/dns-security-notifier"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/akshay-knows/dns-security-notifier">View Demo</a>
    ·
    <a href="https://github.com/akshay-knows/dns-security-notifier/issues/new?labels=bug&template=bug-report---.md">Report Bug</a>
    ·
    <a href="https://github.com/akshay-knows/dns-security-notifier/issues/new?labels=enhancement&template=feature-request---.md">Request Feature</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->
## About The Project

[![DNS Security Notifier Screen Shot][product-screenshot]](https://github.com/akshay-knows/dns-security-notifier)

DNS Security Notifier is a lightweight Chrome extension that helps you understand your DNS security status at a glance. With the increasing importance of online privacy, knowing whether your DNS queries are encrypted is crucial. This extension provides real-time visual feedback about whether websites are using DNS over HTTPS (DoH) or falling back to plain DNS.

**Key Features:**
* 🔒 Real-time DNS security status monitoring
* 🎨 Visual badge indicators (Green for DoH, Orange for plain DNS)
* 📊 Detailed popup with comprehensive security information
* ⚡ Lightweight and fast - minimal resource usage
* 🔐 Privacy-focused - no data collection or tracking

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

* [![Chrome][Chrome]][Chrome-url]
* [![JavaScript][JavaScript]][JavaScript-url]
* [![HTML5][HTML5]][HTML-url]
* [![CSS3][CSS3]][CSS-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->
## Getting Started

Follow these simple steps to get the DNS Security Notifier extension running on your Chrome browser.

### Prerequisites

* Google Chrome browser (version 88 or later)
* Basic understanding of Chrome extensions (optional)

### Installation

1. Clone the repository
   ```sh
   git clone https://github.com/akshay-knows/dns-security-notifier.git
   ```

2. Open Chrome and navigate to the extensions page
   ```
   chrome://extensions/
   ```

3. Enable Developer Mode
   * Toggle the "Developer mode" switch in the top-right corner

4. Load the extension
   * Click "Load unpacked"
   * Select the `dns-security-notifier` folder you cloned

5. Pin the extension to your toolbar
   * Click the puzzle icon 🧩 in Chrome's toolbar
   * Find "DNS Security Notifier" and click the pin icon 📌

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- USAGE EXAMPLES -->
## Usage

Once installed, the DNS Security Notifier will automatically monitor your browsing activity and display the DNS security status.

**Understanding the Badge Colors:**

| Badge | Status | Description |
|-------|--------|-------------|
| 🟢 **DoH** | Secure | Your DNS queries are encrypted via DNS over HTTPS |
| 🟠 **DNS** | Warning | Using traditional unencrypted DNS queries |

**How to Use:**

1. Browse normally - the extension works automatically
2. Check the badge color in your toolbar to see current DNS status
3. Click the extension icon for detailed information about:
   - Current DNS security status
   - What DNS over HTTPS means
   - How your privacy is protected

**Testing the Extension:**

Visit these sites to see different statuses:
* `https://www.google.com` - Should show green "DoH" badge
* `http://neverssl.com` - Should show orange "DNS" badge

_For more information about enabling DNS over HTTPS in Chrome, visit [Chrome's Security Settings](chrome://settings/security)_

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ROADMAP -->
## Roadmap

- [x] Basic DoH/DNS detection
- [x] Visual badge indicators
- [x] Popup information panel
- [ ] Detailed DNS provider detection
- [ ] Historical DNS status logging
- [ ] Custom DoH provider configuration
- [ ] Support for Firefox and Edge
- [ ] Advanced security metrics dashboard
- [ ] Multi-language support
    - [ ] Spanish
    - [ ] French
    - [ ] German

See the [open issues](https://github.com/akshay-knows/dns-security-notifier/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Top contributors:

<a href="https://github.com/akshay-knows/dns-security-notifier/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=akshay-knows/dns-security-notifier" alt="contrib.rocks image" />
</a>

<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTACT -->
## Contact

Akshay - https://github.com/akshay-knows

Project Link: [https://github.com/akshay-knows/dns-security-notifier](https://github.com/akshay-knows/dns-security-notifier)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

* [Chrome Extension Documentation](https://developer.chrome.com/docs/extensions/)
* [DNS over HTTPS (DoH) - Cloudflare](https://developers.cloudflare.com/1.1.1.1/encryption/dns-over-https/)
* [Choose an Open Source License](https://choosealicense.com)
* [Img Shields](https://shields.io)
* [Best-README-Template](https://github.com/othneildrew/Best-README-Template)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
[contributors-shield]: https://img.shields.io/github/contributors/akshay-knows/dns-security-notifier.svg?style=for-the-badge
[contributors-url]: https://github.com/akshay-knows/dns-security-notifier/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/akshay-knows/dns-security-notifier.svg?style=for-the-badge
[forks-url]: https://github.com/akshay-knows/dns-security-notifier/network/members
[stars-shield]: https://img.shields.io/github/stars/akshay-knows/dns-security-notifier.svg?style=for-the-badge
[stars-url]: https://github.com/akshay-knows/dns-security-notifier/stargazers
[issues-shield]: https://img.shields.io/github/issues/akshay-knows/dns-security-notifier.svg?style=for-the-badge
[issues-url]: https://github.com/akshay-knows/dns-security-notifier/issues
[license-shield]: https://img.shields.io/github/license/akshay-knows/dns-security-notifier.svg?style=for-the-badge
[license-url]: https://github.com/akshay-knows/dns-security-notifier/blob/master/LICENSE.txt
[product-screenshot]: images/screenshot.png
[Chrome]: https://img.shields.io/badge/Chrome-Extension-4285F4?style=for-the-badge&logo=googlechrome&logoColor=white
[Chrome-url]: https://www.google.com/chrome/
[JavaScript]: https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black
[JavaScript-url]: https://developer.mozilla.org/en-US/docs/Web/JavaScript
[HTML5]: https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white
[HTML-url]: https://developer.mozilla.org/en-US/docs/Web/HTML
[CSS3]: https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white
[CSS-url]: https://developer.mozilla.org/en-US/docs/Web/CSS