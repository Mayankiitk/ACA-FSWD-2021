# INTRODUCTION

This is a very basic representation of an ".md" file :smile: .

## CMD COMMANDS --

1. ***cd***: It stands for *Change Directory* and this helps us to change the directory the command line curently is in.

    - *Syntax* : ~ cd "name of the file"
    
    - *When you need to go one folder up* : ~ cd..

2. ***dir*** : It shows *all the files and folder* contained at the pointed directory in command line.

    - *Syntax* : ~ dir

3. ***mkdir*** : It creates a new folder in the directory pointed in the command line.

    - *Syntax* : ~ mkdir "(optional)location of new folder"\"name of the file"
    
    - *To add multiple folders* : ~ mkdir "name of file1"\"name of file2"\"name of file3"\ ...

4. ***ren*** : Renames a folder in a directory.

    - *Syntax* : ~ ren "Current file name" "New file name"

5. ***copy*** : Copies a file from one folder to another.

    - *Syntax* : ~ copy "location"\"filename.extension" "New location"\"newname.extension"

6. ***xcopy*** : Copies all the files and folders to another location.

    - *Operators* : "/s" and "/i" .

    - */s* : Ensures that all the directories and subdirectories are going to be copied, except the ones that are empty.

    - */i* : Creates a new directory if the destination folder does not exist and copies all the files in it.
    
    - *Syntax* : ~ xcopy /s /i "Original location" "New location"

7. ***del*** : Deletes all the files from a folder.

    - *Syntax* : ~ del "filename"

    - *del \*.docx* – Deletes all files with the DOC extension (you can use any file extension necessary, DOCX is just an example).

    - *del Test\*.\** – delete all files beginning with "Test".
    
    - *del \*.\** – delete ALL files from the current folder.

8. ***rd*** : Deletes a folder.

    - *Syntax* : ~ rd "foldername"

9. ***help*** : A list with all available commands is displayed.

    - *Syntax* : ~ help

---

## SOME TERMINOLOGIES --

- ### Clientside : 
    - Client-side refers to operations that are performed by the client in a client–server relationship in a computer network.
    - Typically, a client is a computer application, such as a web browser, that runs on a user's local computer, smartphone, or other device, and connects to a server as necessary.
    - Operations may be performed client-side because they require access to information or functionality that is available on the client but not on the server, because the user needs to observe the operations or provide input, or because the server lacks the processing power to perform the operations in a timely manner for all of the clients it serves.
    - Additionally, if operations can be performed by the client, without sending data over the network, they may take less time, use less bandwidth, and incur a lesser security risk.

- ### Serverside :
    - Server-side refers to operations that are performed by the server in a client–server relationship in a computer network.
    - Typically, a server is a computer application, such as a web server, that runs on a remote server, reachable from a user's local computer, smartphone, or other device.
    - Operations may be performed server-side because they require access to information or functionality that is not available on the client, or because performing such operations on the client side would be slow, unreliable, or insecure.

- ### HTTP Protocol :
    - HTTP is a protocol which allows the fetching of resources, such as HTML documents. 
    - It is the foundation of any data exchange on the Web and it is a client-server protocol, which means requests are initiated by the recipient, usually the Web browser.
    - Designed in the early 1990s, HTTP is an extensible protocol which has evolved over time. It is an application layer protocol that is sent over TCP, or over a TLS-encrypted TCP connection, though any reliable transport protocol could theoretically be used.

- ### HTTP vs HTTPS :
    1. HTTP URL in your browser's address bar is http:// and the HTTPS URL is https://.
    2. HTTP is unsecured while HTTPS is secured.
    3. HTTP sends data over port 80 while HTTPS uses port 443.
    4. HTTP operates at application layer, while HTTPS operates at transport layer.
    5. No SSL certificates are required for HTTP, with HTTPS it is required that you have an SSL certificate and it is signed by a CA.
    6. HTTP doesn't require domain validation, where as HTTPS requires at least domain validation and certain certificates even require legal document validation.
    7. No encryption in HTTP, with HTTPS the data is encrypted before sending.

- ### Frameworks vs Libraries :
    - The key difference between a library and a framework is "Inversion of Control".
        - When you use a library, you are in charge of the flow of the application. You are choosing when and where to call the library. 
        - When you use a framework, the framework is in charge of the flow. It provides some places for you to plug in your code, but it calls the code you plugged in as needed.

---

> ## “What would life be if we had no courage to attempt anything?”
> #### Vincent van Gogh