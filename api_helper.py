#!/usr/bin/env python3
"""
India Legal Data API Helper
Easy access to IPC, BNS, Constitution and Resource Links
"""

import json
import os


class LegalData:
    def __init__(self, data_dir="data"):
        self.data_dir = data_dir
        self._load_data()

    def _load_data(self):
        with open(f"{self.data_dir}/ipc.json", "r") as f:
            self.ipc = json.load(f)
        with open(f"{self.data_dir}/bns.json", "r") as f:
            self.bns = json.load(f)
        with open(f"{self.data_dir}/constitution.json", "r") as f:
            self.constitution = json.load(f)
        with open(f"{self.data_dir}/mapping.json", "r") as f:
            self.mapping = json.load(f)
        with open(f"{self.data_dir}/resources.json", "r") as f:
            self.resources = json.load(f)

    def get_ipc(self, section):
        """Get IPC section details"""
        for s in self.ipc["sections"]:
            if s["section"] == section:
                return s
        return None

    def get_bns(self, section):
        """Get BNS section details"""
        for s in self.bns["sections"]:
            if s["section"] == section:
                return s
        return None

    def find_bns_from_ipc(self, ipc_section):
        """Find BNS equivalent of IPC section"""
        return self.mapping["mapping"].get(str(ipc_section))

    def get_constitution(self, article):
        """Get Constitution article details"""
        for a in self.constitution["articles"]:
            if a["article"] == article:
                return a
        return None

    def search_by_keyword(self, keyword):
        """Search all laws by keyword"""
        results = {"ipc": [], "bns": [], "constitution": []}
        keyword = keyword.lower()

        for s in self.ipc["sections"]:
            if keyword in s["title"].lower():
                results["ipc"].append(s)

        for s in self.bns["sections"]:
            if keyword in s["title"].lower():
                results["bns"].append(s)

        for a in self.constitution["articles"]:
            if keyword in a.get("title", "").lower():
                results["constitution"].append(a)

        return results

    def get_resources(self, category=None):
        """Get resource links by category"""
        if category:
            return self.resources["categories"].get(category)
        return self.resources["categories"]

    def get_quick_guide(self, situation):
        """Get quick action guide for specific situation"""
        for guide in self.resources["quick_guide"]["scenarios"]:
            if guide["situation"].lower() == situation.lower():
                return guide
        return None


# Example usage
if __name__ == "__main__":
    api = LegalData()

    # Example 1: Find BNS for IPC 302 (Murder)
    print("IPC 302 -> BNS:", api.find_bns_from_ipc(302))

    # Example 2: Search for "rape"
    print("\nSearch 'theft':", api.search_by_keyword("theft"))

    # Example 3: Get quick guide for cyber fraud
    print("\nCyber Fraud Guide:", api.get_quick_guide("Cyber Fraud"))

    # Example 4: Get cybercrime portals
    print("\nCybercrime Links:", api.get_resources("cybercrime"))
