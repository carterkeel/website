---
title: Proxmox Homelab
summary: The creation of Batman (the name of my homelab).
thumbnail: /images/post_thumbnail_homelab.webp
date: 2026-02-01T20:27:00
draft: false
tags:
  - homelab
  - proxmox
  - dns
  - users
  - selfhost
  - networking
categories: []
---

Creating my homelab has been one of the most satisfying and useful projects I have configured. A homelab, for those who don’t know, is simply your own personal server setup that is typically accessible through your local network.

#### Proxmox Configuration

For my personal setup, I use an industry‑standard hypervisor called [Proxmox](https://www.proxmox.com/) which allows me to run multiple different operating systems on the same machine. For example, I could host TrueNAS and Ubuntu Server at the same time on two separate VMs, allowing me to compartmentalize functionality so that if there are issues on one OS, only that specific VM is affected while all other services continue running unaffected. Using Proxmox also makes restoring broken VMs easy by using either backups or snapshots, both of which are much more difficult to use when running something like Ubuntu Server on bare‑metal hardware.

#### Self-Hosted Services

I mostly use my homelab for self‑hosting apps like [Audiobookshelf](https://www.audiobookshelf.org/), which is like my own local Audible that isn’t connected to Amazon meaning I can still listen to my audiobooks if Audible removes a book or goes offline. Audiobookshelf is a self‑hosted audiobook and podcast server designed to organize and stream your personal collection.

Similar to Audiobookshelf, [Immich](https://immich.app/) is a self‑hosted app, but instead of storing audiobooks, Immich stores my photos like iCloud or Google Photos. Immich helps you browse, organize, and back up your photos and videos from your own server. The best part about Immich is that in the client‑side app, photos from your gallery automatically sync when connected to your local network. I would recommend watching my video below on self hosted apps I can't live without.

{{< youtube 3whYXmRJcAE >}}

#### Reaching Out of the Network

One thing you may notice up until now in this article is that even though the self‑hosted services seem awesome, they are confined to the local network which is true. I would argue that this is a **feature** because it means only people with access to your local network can access these services. This is a key principle in cybersecurity: only people who need access have access. If you had these services exposed to the web, you would be opening up your internal network to the outside world, and if you have weak user accounts, people could break into the accounts and, in some cases like Immich, upload files depending on your permissions, which could compromise your network.

Wanting to use your homelab from anywhere is not wrong and I wanted that too without exposing much of my network. That’s when I tried out different VPN services after talking to my friend. A VPN basically makes a secure tunnel from your device to your local network instead of opening it up for everyone. I decided to use the industry‑standard VPN protocol, [WireGuard](https://www.wireguard.com/), because it is lightning fast and simple to use without sacrificing the security of my network. Now, whenever I want to access my network, I simply toggle my VPN connection and I’m tunneled in within seconds.

#### Conclusion

Wrapping everything up, my homelab has been an ongoing journey of learning about new tools, finding problems, and creating solutions. At this point, I could never go back given how much I use it while adding new self‑hosted open‑source services to replace the closed‑source, anti‑consumer ones that plague us now. If you are at all interested in creating a homelab, I highly recommend checking out my video on not waiting to get started because of your hardware below.

{{< youtube Pa1CRNWVMq0 >}}
