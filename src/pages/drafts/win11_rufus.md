# Installing Windows on An NVME Drive using Rufus 4.11.x

## Prerequisites

- Windows 11 ISO
- Rufus 4.11.x
- NVME Drive

## Installating Rufus

1. Download Rufus [4.11](https://github.com/pbatard/rufus/releases/download/v4.11/rufus-4.11.exe) from [Rufus](https://rufus.ie/en/#download)
2. Run Rufus 4.11

## Installing the ISO on the NVME

1. Make sure your NVME is plugged in using some sort of NVME to [USB interface](https://www.amazon.com/s?k=nvme+usb+adapter)
2. Open Rufus


@echo off
echo === CLEAN + PARTITION NVMe (Disk 2) ===
diskpart <<EOF
select disk 2
clean
convert gpt

rem EFI System Partition (bootloader)
create partition efi size=100
format quick fs=fat32 label=EFI
assign letter=S

rem Microsoft Reserved Partition (required, hidden)
create partition msr size=16

rem Main Windows partition
create partition primary
format quick fs=ntfs label=Windows
assign letter=W
exit
EOF

echo === APPLY WINDOWS IMAGE ===
dism /apply-image /imagefile:D:\sources\install.wim /index:1 /applydir:W:\

echo === CREATE UEFI BOOTLOADER ===
bcdboot W:\Windows /s S: /f UEFI

echo === DONE — SAFE TO SHUT DOWN ===
pause
