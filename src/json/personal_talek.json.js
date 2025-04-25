function main() {
  console.log(
    JSON.stringify(
      {
        title: 'Personal Talek (@talek)',
        maintainers: ['talek'],
        rules: [
          roSymbols(),
          ctrlExtended(),
          appLauncher()
        ]
      },
      null,
      ' '
    )
  )
}

function roSymbols() {
  return {
    "description": "Both command keys and letter inserts the accented RO symbol (Unicode Hex Input required).",
    "manipulators": [
      {
        "from": {
          "key_code": "a",
          "modifiers": { "mandatory": ["left_command", "right_command"] }
        },
        "to": [
          { "key_code": "non_us_backslash" },
          { "key_code": "a" },
          {
            "key_code": "9",
            "modifiers": ["left_shift"]
          }
        ],
        "type": "basic"
      },
      {
        "from": {
          "key_code": "a",
          "modifiers": { "mandatory": ["left_command", "right_command", "right_shift"] }
        },
        "to": [
          { "key_code": "non_us_backslash" },
          {
            "key_code": "a",
            "modifiers": ["left_shift"]
          },
          {
            "key_code": "9",
            "modifiers": ["left_shift"]
          }
        ],
        "type": "basic"
      },
      {
        "from": {
          "key_code": "q",
          "modifiers": { "mandatory": ["left_command", "right_command"] }
        },
        "to": [
          { "key_code": "non_us_backslash" },
          { "key_code": "a" },
          {
            "key_code": "period",
            "modifiers": ["left_shift"]
          }
        ],
        "type": "basic"
      },
      {
        "from": {
          "key_code": "q",
          "modifiers": { "mandatory": ["left_command", "right_command", "right_shift"] }
        },
        "to": [
          { "key_code": "non_us_backslash" },
          {
            "key_code": "a",
            "modifiers": ["left_shift"]
          },
          {
            "key_code": "period",
            "modifiers": ["left_shift"]
          }
        ],
        "type": "basic"
      },
      {
        "from": {
          "key_code": "t",
          "modifiers": { "mandatory": ["left_command", "right_command"] }
        },
        "to": [
          { "key_code": "non_us_backslash" },
          { "key_code": "t" },
          { "key_code": "comma" }
        ],
        "type": "basic"
      },
      {
        "from": {
          "key_code": "t",
          "modifiers": { "mandatory": ["left_command", "right_command", "right_shift"] }
        },
        "to": [
          { "key_code": "non_us_backslash" },
          {
            "key_code": "t",
            "modifiers": ["left_shift"]
          },
          { "key_code": "comma" }
        ],
        "type": "basic"
      },
      {
        "from": {
          "key_code": "s",
          "modifiers": { "mandatory": ["left_command", "right_command"] }
        },
        "to": [
          { "key_code": "non_us_backslash" },
          { "key_code": "s" },
          { "key_code": "comma" }
        ],
        "type": "basic"
      },
      {
        "from": {
          "key_code": "s",
          "modifiers": { "mandatory": ["left_command", "right_command", "right_shift"] }
        },
        "to": [
          { "key_code": "non_us_backslash" },
          {
            "key_code": "s",
            "modifiers": ["left_shift"]
          },
          { "key_code": "comma" }
        ],
        "type": "basic"
      },
      {
        "from": {
          "key_code": "i",
          "modifiers": { "mandatory": ["left_command", "right_command"] }
        },
        "to": [
          { "key_code": "non_us_backslash" },
          { "key_code": "i" },
          {
            "key_code": "period",
            "modifiers": ["left_shift"]
          }
        ],
        "type": "basic"
      },
      {
        "from": {
          "key_code": "i",
          "modifiers": { "mandatory": ["left_command", "right_command", "left_shift"] }
        },
        "to": [
          { "key_code": "non_us_backslash" },
          {
            "key_code": "i",
            "modifiers": ["left_shift"]
          },
          {
            "key_code": "period",
            "modifiers": ["left_shift"]
          }
        ],
        "type": "basic"
      }
    ]
  }
}

function ctrlExtended() {
  return {
    "description": "Capslock acts as CTRL if pressed with another key, else acts as ESC. Quote with another key is CTRL, else is quote",
    "manipulators": [
        {
            "from": {
                "key_code": "quote",
                "modifiers": { "optional": ["any"] }
            },
            "to": [{ "key_code": "left_control" }],
            "to_if_alone": [{ "key_code": "quote" }],
            "type": "basic"
        },
              {
            "from": {
                "key_code": "caps_lock",
                "modifiers": { "optional": ["any"] }
            },
            "to": [{ "key_code": "left_control" }],
            "to_if_alone": [{ "key_code": "escape" }],
            "type": "basic"
        }
    ]
  }
}

function appLauncher() {
  return {
    "description": "Launch apps by resting four fingers on the right side of the touchpad and pressing the key assigned for the app.",
    "manipulators": [
      {
        "conditions": [
          {
            "name": "multitouch_extension_finger_count_right_half_area",
            "type": "variable_if",
            "value": 4
          }
        ],
        "from": { "key_code": "f" },
        "to": [{ "shell_command": "open -a Firefox.app" }],
        "type": "basic"
      },
      {
        "conditions": [
          {
            "name": "multitouch_extension_finger_count_right_half_area",
            "type": "variable_if",
            "value": 4
          }
        ],
        "from": { "key_code": "a" },
        "to": [{ "shell_command": "open -a iTerm.app" }],
        "type": "basic"
      },
      {
        "conditions": [
          {
            "name": "multitouch_extension_finger_count_right_half_area",
            "type": "variable_if",
            "value": 4
          }
        ],
        "from": { "key_code": "s" },
        "to": [{ "shell_command": "open -a 'Microsoft Teams'" }],
        "type": "basic"
      },
      {
        "conditions": [
          {
            "name": "multitouch_extension_finger_count_right_half_area",
            "type": "variable_if",
            "value": 4
          }
        ],
        "from": { "key_code": "e" },
        "to": [{ "shell_command": "open -a Telegram" }],
        "type": "basic"
      },
      {
        "conditions": [
          {
            "name": "multitouch_extension_finger_count_right_half_area",
            "type": "variable_if",
            "value": 4
          }
        ],
        "from": { "key_code": "w" },
        "to": [{ "shell_command": "open -a Notes" }],
        "type": "basic"
      },
      {
        "conditions": [
          {
            "name": "multitouch_extension_finger_count_right_half_area",
            "type": "variable_if",
            "value": 4
          }
        ],
        "from": { "key_code": "r" },
        "to": [{ "shell_command": "open -a Obsidian" }],
        "type": "basic"
      }
    ]
  }
}

main()
