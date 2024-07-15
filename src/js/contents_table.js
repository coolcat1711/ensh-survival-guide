class ContentsList extends HTMLDivElement
{
    constructor()
    {
        self = super();
    }

    connectedCallback()
    {
        const listRoot = document.getElementById("page-contents");

        var tagNumber = 0
        var currentDepth = 0
        var depthHierarchy = []
        this.getHeaderList().forEach((hElem) => {

            let tagName = "header-" + tagNumber;
            if(hElem.id === "")
            {
                hElem.setAttribute("id", tagName);
            }
            else
            {
                tagName = hElem.id;
            }

            tagNumber += 1;

            let elemDepth = Number(hElem.tagName.charAt(1));
            if(elemDepth > currentDepth)
            {
                let ulElem = document.createElement("ul");
                let liElem = document.createElement("li");
                ulElem.appendChild(liElem)
                let aElem = document.createElement("a");
                liElem.appendChild(aElem);
                aElem.setAttribute("href", "#" + tagName);
                aElem.setAttribute("style", "white-space: nowrap;");
                aElem.innerText = hElem.innerText;
                if(currentDepth > 0)
                {
                    depthHierarchy[currentDepth - 1].appendChild(ulElem)
                }
                else
                {
                    listRoot.appendChild(ulElem);
                }

                depthHierarchy.push(ulElem);
                currentDepth += 1;
                return;
            }
            else if (elemDepth == currentDepth)
            {
                let liElem = document.createElement("li");
                let aElem = document.createElement("a");
                liElem.appendChild(aElem);
                aElem.setAttribute("href", "#" + tagName);
                aElem.setAttribute("style", "white-space: nowrap;");
                aElem.innerText = hElem.innerText;
                depthHierarchy[currentDepth - 1].append(liElem);
                return;
            }
            else
            {
                for(let i = currentDepth; i > elemDepth; i--)
                {
                    depthHierarchy.pop();
                    currentDepth -= 1;
                }
                let liElem = document.createElement("li");
                let aElem = document.createElement("a");
                liElem.appendChild(aElem);
                aElem.setAttribute("href", "#" + tagName);
                aElem.setAttribute("style", "white-space: nowrap;");
                aElem.innerText = hElem.innerText;
                depthHierarchy[currentDepth - 1].append(liElem);
                return;
            }
        })
    }

    getHeaderList()
    {
        return document.querySelectorAll("h2,h3,h4,h5,h6")
    }
}

customElements.define("contents-list", ContentsList, { extends: "div" });
