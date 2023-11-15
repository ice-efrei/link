# ICE Efrei Short link service

Simple short link service for ICE Efrei.
e.g : https://short.ice-efrei.fr?l=discord	

## Add a new short link

To add a new short link, you need to edit the `/src/data/links.json` file and add a new entry in the following format:

```json
 
        {
            "name": "<name>",
            "initials": "<initials>",
            "href": "<href>",
            "description": "<description>"
        } 
```

- `name` is the name of the shortcut, it will be displayed on the website. e.g. `https://short.ice-efrei.fr?l=name`
- `initials` is the initials of the shortcut, it will be used for the display.
- `href` is the link to redirect to. e.g. `https://discord.gg/ANucffp`
- `description` is the description of the shortcut, it will be displayed on the website. Optional. 