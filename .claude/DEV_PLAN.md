# Development Plan

## Adobe Portfolio Websites

Adobe subscription is finally canceled. I have two websites I used to update from Lightroom to Behance and Adobe Portfolio sites. I need to pull them both down and make them functional locally. Then I can deploy them to GitHub Pages. 

- [https://art-history.august.style/](https://art-history.august.style/)
- [https://illustration-animation.august.style/](https://illustration-animation.august.style/)

Let's wget each of them and then use the wget output to create a new repository. 

### Download Websites 

1. Place arguments before the URL.

2. The directories are already created, so we can just run the commands. 

```zsh
cd /Users/seanivore/Development/art-history-prints
wget -c -r -nH -p -k -E --convert-links --domains august.style --restrict-file-names=windows --wait=2 --random-wait --limit-rate=200k --max-pages=50 https://art-history.august.style/
``` 

```zsh
cd /Users/seanivore/Development/art-illustration-animation
wget -c -r -nH -p -k -E --convert-links --domains august.style --restrict-file-names=windows --wait=2 --random-wait --limit-rate=200k --max-pages=50 https://illustration-animation.august.style/
``` 


1. Copy over the 'new project directory' prepared directories and set up proper branches and repositories, as usual. 

### Organize and Deploy 

1. Organize the files. 
2. Prepare the README files. 
3. Create CNAME file with no extension and only the custom domain name. 
4. Change the DNS from pointing to Adobe Portfolio to pointing to GitHub Pages. 
5. Create the Jekyll config file `_config.yml` with the usual settings. 
6. Deploy to GitHub Pages. 

## Content Completion  

Add the newly deployed websites to the list of projects on the `./INDEX.md` file. 

## Design & Structure 

This is meant to be a single page website that is more of a resource than a portfolio. I have yet to decide if we I want an image for each entry or not. My initial thought towards using Markdown > HTML has shifted since I've yet to find or create a Jekyll theme that I'm happy with. 