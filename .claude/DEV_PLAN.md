# Development Plan

## Adobe Portfolio Websites

Adobe subscription is finally canceled. I have two websites I used to update from Lightroom to Behance and Adobe Portfolio sites. I need to pull them both down and make them functional locally. Then I can deploy them to GitHub Pages. 

- [https://art-history.august.style/](https://art-history.august.style/)
- [https://illustration-animation.august.style/](https://illustration-animation.august.style/)

Let's wget each of them and then use the wget output to create a new repository. 

### Troubleshoot Common Wget Issue 

**Find the `./ai_docs/wget-github-pages-etc/wget-command-arguments.md` option to ensure that the root directory is not the domain name, otherwise it creates massive path issues.** 

### Download Websites  

1. Place arguments before the URL.

2. Run the commands. 

```zsh
cd /Users/seanivore/Development
mkdir art-history-prints
cd art-history-prints
wget https://art-history.august.style/ 
``` 

```zsh
cd /Users/seanivore/Development
mkdir art-illustration-animation
cd art-illustration-animation
wget https://illustration-animation.august.style/ 
``` 

3. Copy over the 'new project directory' prepared directories and set up proper branches and repositories, as usual. 

### Organize and Deploy 

1. Organize the files. 
2. Create CNAME file with no extension and only the custom domain name. 
3. Create the Jekyll config file `_config.yml` with the usual settings. 
4. Deploy to GitHub Pages. 

## Content Completion  

Add the newly deployed websites to the list of projects on the `./INDEX.md` file. 

## Design & Structure 

This is meant to be a single page website that is more of a resource than a portfolio. I have yet to decide if we I want an image for each entry or not. My initial thought towards using Markdown > HTML has shifted since I've yet to find or create a Jekyll theme that I'm happy with. 