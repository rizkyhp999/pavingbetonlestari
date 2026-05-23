from playwright.sync_api import sync_playwright
import os

artifact_dir = r"C:\Users\Administrator\.gemini\antigravity\brain\ff4dc224-ec87-4e24-8038-31efd1515939\artifacts"
if not os.path.exists(artifact_dir):
    os.makedirs(artifact_dir)

with sync_playwright() as p:
    browser = p.chromium.launch(headless=True)
    
    # Set viewport to standard desktop
    context = browser.new_context(viewport={"width": 1280, "height": 800})
    page = context.new_page()
    
    pages = [
        ("homepage", "/"),
        ("paving", "/paving"),
        ("panel", "/panel"),
        ("fiberglass", "/fiberglass"),
        ("lainnya", "/lain")
    ]
    
    for name, path in pages:
        url = f"http://localhost:3000{path}"
        print(f"Navigating to {name} ({url})...")
        page.goto(url)
        page.wait_for_load_state("networkidle")
        
        # Take full page screenshot
        screenshot_path = os.path.join(artifact_dir, f"{name}.png")
        page.screenshot(path=screenshot_path, full_page=True)
        print(f"Saved {screenshot_path}")
        
    browser.close()
